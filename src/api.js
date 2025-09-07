import {collection, getDocs, getDoc, query, where, doc} from 'firebase/firestore/lite';
import getFirestoreDB from "./utils/firebase.js";
import {sha512} from 'js-sha512';

const vansCollectionRef = collection(getFirestoreDB(), 'vans');
const reviewsCollectionRef = collection(getFirestoreDB(), 'reviews');
const usersCollectionRef = collection(getFirestoreDB(), 'users');

export async function fetchVans() {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(doc => {
        return ({...doc.data(), id: doc.id});
    })

    return vans;
}

export async function getVan(id) {
    const docRef = doc(getFirestoreDB(), 'vans', id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
        throw new Error(`Van not found!`);
    }
    const vanData = snapshot.data();
    return {...vanData, id: vanData.id};
}

export async function getHostVans(hostId) {
    const hostVanQuery = query(vansCollectionRef, where('hostId', '==', hostId));
    const snapshot = await getDocs(hostVanQuery);
    const vans = snapshot.docs.map(doc => {
        return ({...doc.data(), id: doc.id});
    });

    return vans;
}

export async function getReviews(hostId) {
    const hostReviewQuery = query(reviewsCollectionRef, where('hostId', '==', hostId));
    const snapshot = await getDocs(hostReviewQuery);
    const reviews = snapshot.docs.map(doc => {
        return ({...doc.data(), id: doc.id});
    })

    return reviews;
}

export async function loginUser(credentials) {
    let {email, password} = credentials;
    password = sha512(password);

    const userQuery = query(usersCollectionRef, where('email', '==', email), where('password', '==', password));
    const snapshot = await getDocs(userQuery);
    const foundUser = snapshot.docs.pop();
    if (!foundUser) {
        throw {
            message: 'Username or password is incorrect',
            statusText: 'Username or password is incorrect',
            status: 400
        };
    }

    return {
        user: {email: foundUser.email},
        token: "Here's some tokens for the arcade machine."
    }
}

/*
export async function fetchVans() {
    const res = await fetch('/api/vans');
    console.log(JSON.stringify(res, null, 2));
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    // throw new Error('test');
    return data.vans;
}
*/
/*
export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans.',
            statusText: res.statusText,
            status: res.status
        }
    }

    return (await res.json()).vans;
}
*/

/*
export async function loginUser(credentials) {
    const res = await fetch('/api/login',
        {method: 'post', body: JSON.stringify(credentials)});

    const data = await res.json();
    if (!res.ok) {
        throw {message: data.message, statusText: res.statusText, status: res.status};
    }
    return data;
}
*/

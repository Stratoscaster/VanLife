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

export async function loginUser(credentials) {
    const res = await fetch('/api/login',
        {method: 'post', body: JSON.stringify(credentials)});

    const data = await res.json();
    if (!res.ok) {
        throw {message: data.message, statusText: res.statusText, status: res.status};
    }
    return data;


}
export async function fetchVans() {
    const res = await fetch('/api/vans');
    const data = await res.json();
    // throw new Error('test');
    return data.vans;
    // Original Code:
    // fetch('/api/vans').then(response => {
    //     response.json().then(
    //         body => {
    //             return body.vans;
    //         }
    //     ).catch(err => console.error(err, err.stack));
    // }).catch(err => console.error(err, err.stack));
}
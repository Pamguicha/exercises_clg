function resolveAfter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved');
        }, 2000);
    })
}

async function asyncCall() {
    console.log('Calling');
    const result = await resolveAfter();
    console.log(result);
    console.log("Hey there!");
}

asyncCall();
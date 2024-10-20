const promise1 = Promise.resolve(3);
const promise2 = 63;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 'hey');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})

//expected output: Array[3, 63, 'hey']
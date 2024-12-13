const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('i am succed');
    }, 1000)
});

promise.then(value => console.log(value));  
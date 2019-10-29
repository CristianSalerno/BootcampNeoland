var prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNum = Math.random();
        if (randomNum >= 0.7) {
            reject()
        } else {
            resolve()
        }
    }, 3000);
})


prom.then(() => {
    console.log('ok')
}).catch(() => {
    console.log('not ok')
});

console.log('hacer otras cosas');

//Creo un Array de promesas


/* let promises = [promise1, promise2];

Promise.all(promises).then((results) => {
    console.log(results)
}).catch((errores) => {
    console.log(errores)
}); */
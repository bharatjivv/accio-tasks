// console.log('fetch karlo')

// fetch("https://catfact.ninja/fact")
// .then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data) => {
//     console.log(data);
//     document.body.innerHTML += 
//     `
//         <div>
//             <p> Fact - ${data.fact} </p>
//             <p> Length - ${data.length} </p>    
//         </div>
//     `
// })


const Promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1');
        }, 1000);
    })
}

const Promise2 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2');
        }, 2000);
    })
}

const Promise3 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3');
        }, 2500);
    })
}


// console.log(new Date());
// Promise.all([Promise1(), Promise2(), Promise3()]).then((data) => {
//     console.log(new Date());
//     console.log(data);
// })

console.log(new Date());
Promise.any([Promise1(), Promise2(), Promise3()]).then((data) => {
    console.log(new Date());
    console.log(data);
})
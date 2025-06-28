console.log('Promises');


// function myFnc(resolve, reject) {
//     resolve('Implemented the function inside promise');
//     reject('Not able to implement');
// }

// const Promise1 = new Promise(myFnc);
// Promise1.then(result => (console.log(result)));


// Promise as a variable
// const Promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 1');
//     }, 1000);
// });

// const Promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 2');
//     }, 1000);
// });

// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 3');
//     }, 1000);
// });

// const Promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 4');
//     }, 1000);
// });

// const Promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 5');
//     }, 1000);
// });

// const Promise6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Inside Promise 6');
//     }, 1000);
// });


// Promise1.then((data1)=> {
//     console.log('Step1 done', data1);
//     return Promise2;
// }).then((data2)=> {
//     console.log("Step2 done", data2);
//     return Promise3;
// }).then((data3)=> {
//     console.log("Step3 done", data3);
//     return Promise4;
// }).then((data4)=> {
//     console.log("Step4 done", data4);
//     return Promise5;
// }).then((data5)=> {
//     console.log("Step5 done", data5);
//     return Promise6;
// }).then((data6)=> {
//     console.log("Step6 done", data6);
// })


// Promise as a function
const Promise1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Inside Promise 1');
        }, 1000);
    });
}

const Promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Inside Promise 2');
        }, 2000);
    });
}

const Promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Inside Promise 3');
        }, 2500);
    });
}

const Promise4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Inside Promise 4');
        }, 1700);
    });
}

const Promise5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Inside Promise 5');
        }, 1500);
    });
}

const Promise6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Inside Promise 6');
        }, 1000);
    });
}

Promise1().then((data1)=> {
    console.log('Step1 done', data1);
    return Promise2(data1);
}).then((data2)=> {
    console.log("Step2 done", data2);
    return Promise3(data2);
}).then((data3)=> {
    console.log("Step3 done", data3);
    return Promise4(data3);
}).then((data4)=> {
    console.log("Step4 done", data4);
    return Promise5(data4);
}).then((data5)=> {
    console.log("Step5 done", data5);
    return Promise6(data5);
}).then((data6)=> {
    console.log("Step6 done", data6);
}).catch((e) => {
    console.log("Encountered Error in ", e);
})
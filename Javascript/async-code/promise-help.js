// simple implementation of promise object in javascript 

// function someAsyncTask() {
//     return new Promise( function(resolve, reject) {
//         let err = true;
//         if(!err) resolve('some task that functino is intended to do');
//         else reject('SOME ERROR!')
//     })
// };


// someAsyncTask()
// .then(function(response) {
//     console.log(response);
// }).catch(function(error) {
//     console.log(error);
// });




// Previous Add implementing promise
const addPromise = function (a, b, timeInterval) {
    return new Promise( function(resolve, reject) {
        setTimeout(function () {
            let sum = a + b;
            if(sum < 0 ) reject(sum + "ERR, SUM LESS THAN ZERO!")
            else resolve(sum);
            console.log(sum + " excuted after timeinterval " + timeInterval + 'ms');
        }, timeInterval);
    });
};
addPromise(1, 2, 2000)
.then(function(sum){
    console.log('sum1 = ' + sum);
    return addPromise(sum, 2, 2000)
}).then(function(sum2){
    console.log('sum2 = ' + sum2);
    return addPromise(sum2, 2, 2000)
}).then(function(sum3){
    console.log('sum3 = ' + sum3);
    return addPromise(sum3, 2, 2000)
}).then(function(sum4){
    console.log('sum4 = ' + sum4);
    return addPromise(sum4, 2, 2000)
}).then(function(sum5){
    console.log('sum5 = ' + sum5);
    return addPromise(sum5, 2, 2000)
}).then(function(sum6){
    console.log('sum6 = ' + sum6);
    return addPromise(sum6, -20, 2000)
}).then(function(sum7){
    console.log('sum7 = ' + sum7);
}).catch(function(error){
    console.log('Error: '+error);
});



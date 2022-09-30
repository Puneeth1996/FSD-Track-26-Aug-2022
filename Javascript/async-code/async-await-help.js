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

async function addRecursivly() {
    const sum1 = addPromise(1, 2, 2000)
    console.log(sum1 + ' wthout')
    // const sum2 = await addPromise(sum1, 2, 2000)
    // const sum3 = await addPromise(sum2, 2, 2000)
    // const sum4 = await addPromise(sum3, 2, 2000)
    // const sum5 = await addPromise(sum4, 2, 2000)
    // const sum6 = await addPromise(sum5, 2, 2000)
    // const sum7 = await addPromise(sum6, 2, 2000);
    // let sum8;
    // try {
    //     sum8 = await addPromise(sum7, -40, 2000);
    // } catch (error) {
    //     console.log(error)
    // }
    // console.log(sum7 + ' the final sum.')
    // return(sum7);
}

console.log(addRecursivly());
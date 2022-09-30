// simple callback function in javscript
const add = function(a, b, timeInterval, callback) {
    setTimeout(function () {
        let sum = a + b;
        if(callback) callback(sum);
        console.log(sum + " excuted after timeinterval " + timeInterval + 'ms');
    }, timeInterval)
};

// Callback hell
add(1, 2, 2000, function (sum){
    add(3, sum, 3000, function (sum){
        add(3, sum, 3000, function (sum){
            add(3, sum, 3000, function (sum){
                add(3, sum, 3000, function (sum){
                    add(3, sum, 3000, function (sum){
                        add(3, sum, 4000);
                    });
                });
            });
        });
    });
});




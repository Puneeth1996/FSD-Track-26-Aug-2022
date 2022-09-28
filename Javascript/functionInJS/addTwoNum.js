
function addTwoNum( num1 , num2, successCallBack, failureCallBack ) {
    let sum = num1 + num2;
    if(sum<0) {
        failureCallBack("success = "+sum);
    }
    else {
        successCallBack("failure = "+sum)
    }
}

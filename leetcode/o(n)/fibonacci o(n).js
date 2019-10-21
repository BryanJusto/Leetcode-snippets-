var fib = function(N) {
    var temp;
    var a = 1;
    var b = 0;
    while(N > 0){
        temp = a;
        a = a + b;
        b = temp;
        N--;
        console.log("inside while" + b);
    }
    console.log(b);
    return b;
};

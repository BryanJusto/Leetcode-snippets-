var numJewelsInStones = function(J, S) {
    //let sear = J.split("");
    //console.log(sear);
    let count = 0;
    for(let i=0; i<S.length;i++){
        for(let x=0; x<J.length; x++){
            if(S[i] === J[x]){
                count++;
                break;
            }   
        }
    }
    return count
};
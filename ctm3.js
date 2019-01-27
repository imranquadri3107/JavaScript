function soldier(arr){
    arr = arr.sort((a,b)=> {return (a-b)});
    var rankUp = 0;
    for(var i =0; i< arr.length;i++){
        if(arr.indexOf(arr[i]+1) !== -1){
            rankUp++;
        }
    }
    return rankUp;
}
soldier([4,4,3,3,1,0]);

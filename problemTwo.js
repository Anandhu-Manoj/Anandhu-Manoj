function printNumbersSeries(n){
    let result=[];
    for(i=1;i<=n;i++){
        result.push(2*i+1)
    }
    // console.log(result)
    console.log(result.join(","))
}
printNumbersSeries(10)
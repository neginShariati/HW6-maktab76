function cumulativeSum(arr){
    let arry = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        arry.push(sum);
    }
    return arry;

}
console.log(cumulativeSum([1,2,3,4]))
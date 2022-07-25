const arr = [4,5,9,3,1,8,15,27,85];
let ind = 0;
for (i=1;i<arr.length;i++){
    if (arr[ind]<arr[i]){ 
        ind = i;
    }
}
console.log(arr[ind]);
console.log(ind)
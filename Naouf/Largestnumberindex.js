const arr = [45,10,100,96,59,105];
 let largestnumber = 0;
 for(let i=1;i<=arr.length;i++){
    if (arr[largestnumber]< arr[i]){
        largestnumber = i;
    }
 }
 console.log(largestnumber);
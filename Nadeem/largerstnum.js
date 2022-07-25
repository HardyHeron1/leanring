const arr = [10,22,12,26,94,45,101];
    let largestnum = 0;
    for (i=1; i<=arr.length; i++){
        if (arr[largestnum]< arr[i]){
            largestnum = i;
        }
        
    }
    console.log(largestnum);

    // 
    
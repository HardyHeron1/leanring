var merge = function(nums1, m, nums2, n) {
    if(n==0)
        {
            return nums1;
        }
    else{
    for(let i=0;i<n;i++){
        nums1.pop();
    }
    nums1.push(...nums2)
    nums1.sort((a,b) => {return a-b});
    console.log(nums1);
    }
    return;
};

merge([1,2,3,0,0,0],3,[2,5,6],3);

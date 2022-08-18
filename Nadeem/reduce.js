const reduce = (num) => {
    if (num%2 == 0){
        num/=2;
    }
    else{
        num=num-1;
        num /= 2;
        
    }

}
reduce(100);
console.log(num);
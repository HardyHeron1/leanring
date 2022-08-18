arr = ["5","2","3","C","D","+"];
a=[];
for (let i of arr){
    if (i=="C"){
       a.pop();
       console.log(a);
    }
    else if (i=="D"){
        a.push(a[a.length-1]*2);
        console.log(a);
    }
    else if (i=="+"){
        a.push(a[a.length-2] + a[a.length-1]);
        console.log(a);
    }
    else{
        a.push(parseInt(i));
        console.log(a);
    }
}
total=a.reduce((a,b)=> a+b,0);
console.log(total);
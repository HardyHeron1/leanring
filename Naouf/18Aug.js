ops = ["5","2","C","D","+"]
let record = [];
for (let p of ops){
    if (p=="D"){
        b=record[record.length-1]*2
        record.push(b)
    }
    else if(p=="C"){
        record.pop();
    }
    else if(p=="+"){
        b=record.reduce((a,b)=> a+b);
        record.push(b)
    }
    else{
        b=parseInt(p)
       record.push(b)
    }
console.log(record)
}
total = record.reduce((a,b)=> a+b);
console.log(total);

s= "abbaca"
let arr = s.split('');
a=[]
console.log(arr);
arr.forEach((p) => {
    if(p==a[a.length-1]){
        a.pop();
    }
    else{
        a.push(p);
    }
});

console.log(a.join(""));
var removeOuterParentheses = function(s) {
    let a = s.split("")
    a.shift();
    a.pop();
    console.log(a)
    let arr = []
    for (let p of a){
        if (p=="(" && arr[arr.length-1]==")"){
            arr.push(p);
        }
        else if (p=="(" && arr.length==0 ){
            arr.push(p);
        }
        else if(p==")"&& arr[arr.length-1]=="("){
            arr.push(p);
        }
        else if (p==")" && arr.length==0 ){
            break;
        }
    }
    return console.log((arr.join("")))
};
removeOuterParentheses("()()");
const dupremoval = (s) => {
    let arr = s.split("");
    let a=[];
    
for(let val of arr) {
        if(val == a[a.length-1]){
            a.pop();
        }
        else{
            a.push(val);
        }
  }
        
    b = a.join("");
    console.log(b);
}

dupremoval("azxxzy");

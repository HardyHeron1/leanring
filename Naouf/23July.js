const a = (p)=>
{
    const az = String(p);
    const arr = az.split("");
    let z=0;
   arr.forEach((l)=>
   {
    z= z+parseInt( l);
    } 
    );
    return z;
}
console.log(a(987));
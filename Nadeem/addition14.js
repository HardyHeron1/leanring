arr = [1,-2,16,4,11,10];
const array =(a) => {
  let num = 0;
  for (i=0; i<a.length-1; i++){
    for (j=i+1; j<=a.length-1;j++){
      if(a[i]+a[j] == 14){
        num = num+1;
      }
    }
  }
  return num;
}
console.log(array(arr));
s="}(){}[]}"
let a=[...s]
console.log(a)
arr=[];
for (let p of a){
    if(p=='{'||p=='['||p=="("){
        arr.push(p);
        console.log(arr)
    }
    else{
        if(arr.length===0){
            console.log(false)
            break
        }
        else {

        if(p=="}" || p==")" || p=="]"){
            if(arr.length==0)
            console.log(false)
            break;
        }
         else if (arr[arr.length-1]=="{"){
            arr.pop();
        }
        else if(p==")" && arr[arr.length-1]=="("){
            arr.pop();
        }
        else if(p=="]" && arr[arr.length-1]=="["){
            arr.pop();
        }
        }
    }
}
if(arr.length==0){
    console.log(true);
}
else{
    console.log(false);
}
// var numberOfSteps = function(num) {
//     let count = 0;
//     while(true)
//           {
//           if(num==0){
//         return count;
//     }
//         else{
//           if(num%2==0){
//         num=num/2;
//         count=count+1;
//     }
//             else{
//                 num = num -1
//                 count = count+1
//             }
//           }
// }
// };
// console.log(numberOfSteps(28));
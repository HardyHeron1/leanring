arr=[2,3,5,6,7,16,8,,9,10,,,14,15,18,20,21]
class Node{
    constructor(value,left,right){
        this.value=value;
        this.left=left?left:null;
        this.right=right?right:null;
    }
}
let root = new Node (arr[0]);
let p=1;
let que=[];
que.push(root)
while(que!==0 && p<arr.length){
    currentparent= que.shift();
    if(arr[p]){
        currentparent.left= new Node(arr[p]);
        que.push(currentparent.left);
    }
    if(arr[p+1]){
        currentparent.right= new Node(arr[p+1]);
        que.push(currentparent.right);    
    }
    p=p+2;
}
let queue=[];
queue.push(root);
while (queue.length!=0){
temp = queue.shift();
if(temp.value==16){
    console.log(temp);
    return;
}
if(temp.left){
queue.push(temp.left);
}
if(temp.right)
queue.push(temp.right)
}

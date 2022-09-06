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
function Inorder(root) {
    if(root.left){
        Inorder(root.left)
    }
    if(root.right){
        Inorder(root.right);
    }
    if(root.value==16){
        console.log(root.value);
        return;
    }
    return;
}
Inorder(root);
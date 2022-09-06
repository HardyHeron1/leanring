arr= [2,3,5,6,8,,10,,,14,16,18]
class Node{
  constructor(value,left,right){
    this.value=value;
    this.left=left? left:null;
    this.right=right?right:null;
  }
}
  let root = new Node(arr[0]);
  let que=[];
  que.push(root);
  let p=1;
  while(que.length!==0 && p<arr.length){
    let current= que.shift();
    if(arr[p]){
      current.left=new Node(arr[p]);
      que.push(current.left);
    }
    if(arr[p+1]){
      current.right=new Node(arr[p+1])
      que.push(current.right);
    }
    p=p+2;
  }
  // console.log(JSON.stringify(root))
  let sum=0;
  function Inorder(root){
    if (!root.left && !root.right){
      sum += root.value;
    }
    else{
      if (root.left){
        Inorder(root.left);
      }
      if(root.right){
        Inorder(root.right);
      }
    return;
  }
}
Inorder(root);
//console.log(sum);
sum = 0;
function perOrder(root){
  if ((root.left && !root.right) || (!root.left && root.right)){
    sum += root.value;
  }
  if (root.left){
    perOrder(root.left)
  }
  if (root.right){
    perOrder(root.right)
  }
  return;
}
perOrder(root);
console.log(sum)

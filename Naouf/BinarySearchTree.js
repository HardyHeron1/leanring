arr= [10,6,7,5,4,12,15,16,18]
class Node{
  constructor(value,left,right){
    this.value=value;
    this.left=left? left:null;
    this.right=right?right:null;
  }
}
let root = new Node(arr[0]);
let temp = root;
for(p=1;p<arr.length;p++){
  while(true){
    if(temp.value<=arr[p]){
      if(temp.right){
        temp=temp.right;
      }
      else{
        temp.right=new Node(arr[p]);
        break;
      }
    }
    else{
      if(temp.left){
        temp=temp.left;
      }
      else{
        temp.left=new Node(arr[p]);
        break;
      }
    }
  }
}

console.log(JSON.stringify(root));

let arr1 = [4, 6,3, 9, 5]

for (i=0; i<arr.length; i++){
  if(arr[i]>arr[i+1]){
    console.log(false);
    break;
  }
}



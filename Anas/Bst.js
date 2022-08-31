const arr = [2,3,5,6,,7,8,,,10,11,12]
class Node {
    constructor(root,leftNode,rightNode){
        this.root = root;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

let que = [];
let currNode = new Node(arr[0]);

que.push(currNode);
let p = 1;
 
while (p<arr.length && que!==0){
    tempNode = que.shift();
    console.log(tempNode)
    if (arr[p]){
        tempNode.leftNode = new Node(arr[p]);
        que.push(tempNode.leftNode);
    }
    if (arr[p+1]){
        tempNode.rightNode = new Node(arr[p+1]);
        que.push(tempNode.rightNode);
    }
    p += 2;
}

console.log(JSON.stringify(currNode))
console.log(currNode)


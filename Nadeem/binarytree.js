arr = [2,3,5,6,8, ,10, , ,14,16,18];

class Node {
    constructor(value, leftchild, rightchild){
        this.value = value;
        this.leftchild = leftchild ? leftchild : null;
        this.rightchild = rightchild ? rightchild : null;
    }
}

let queue = [];
let root = new Node(arr[0]);
queue.push(root);
let p=1;

while(queue.length!==0 && p<arr.length){
    currparent = queue.shift();
    if(arr[p]) {
        currparent.leftchild = new Node (arr[p]);
        queue.push(currparent.leftchild);
    }
    if (arr[p+1]) {
        currparent.rightchild = new Node (arr[p+1]);
        queue.push(currparent.rightchild);
    }
    p=p+2;
}
console.log(JSON.stringify(root));
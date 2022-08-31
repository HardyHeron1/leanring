arr = [2, 3, 5, 6, 8, ,10, , ,14,16,18];

class Node {
    constructor(value, leftchild, rightchild) {
        this.value = value;
        this.leftchild = leftchild ? leftchild : null;
        this.rightchild = rightchild ? rightchild : null;
    }
}

let queue = [];
let root = new Node(arr[0]);
queue.push(root);
let p = 1;

while (queue.length !== 0 && p < arr.length) {
    curparent = queue.shift();
    if (arr[p]) {
        curparent.leftchild = new Node(arr[p]);
        queue.push(curparent.leftchild);
    }
    if (arr[p + 1]) {
        curparent.rightchild = new Node(arr[p + 1]);
        queue.push(curparent.rightchild);
    }
    p = p + 2;
}
console.log(JSON.stringify(root));

let flag=1;
function Inorder(root) {
    if (root.leftchild && flag!==0) {
        Inorder(root.leftchild);
    }
    if (root.value === 16) {
        console.log(root.value);
        flag=0;
        return;
    }
    if (root.rightchild && flag!==0) {
        Inorder(root.rightchild);
    }
    return;
}
Inorder(root);

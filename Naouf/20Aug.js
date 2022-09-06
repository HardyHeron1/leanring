arr = [0,1,2]
function ListNode(val) {
         this.val = val;
        this.next = null;
     }
     let node = new ListNode(arr[0]);
     let temp =node;
     arr.splice(0,1)
     console.log(arr)
     for(let p of arr)
     {
        let nd = new ListNode(p)
        temp.next = nd;
        temp= nd;
     }
    let prev = node;
     let curr = prev.next.next
    while(curr)
        {
            if(prev.next==null)
            {
                return console.log(false);
            }
            else{
                if(prev.next==curr.next)
                {
                    return console.log(true);
                }
                else{
                    if(curr.next==null||curr.next.next ==null)
                    {
                        return console.log(false);
                    }
                    else{
                    prev = prev.next;
                    curr =curr.next.next;
                    }
                }
            }
            return console.log(false);
        }

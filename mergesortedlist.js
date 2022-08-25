/**
 * Definition for singly-linked list. */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  let head;
  if(!list1 && !list2) {
      return null;
  }
  else if(!list1) {
      return list2;
  } else if(!list2) {
      return list1;
  }
  else if(list1 && list2) {
      if (list1.val >= list2.val) {
          head = list2;
          list2 = list2.next;
          
      } else {
          head = list1;
          list1 = list1.next;
      }
  }
  let tmp = head;
  while(list1 || list2) {
      if (list1 && list2) {
          if (list1.val >= list2.val) {
              tmp.next = list2;
              tmp = list2;
              list2 = list2.next;
          } else {
              tmp.next = list1;
              tmp = list1;
              list1 = list1.next;
          }
      } else if(list1) {
          tmp.next = list1;
          break;
      } else if (list2) {
          tmp.next = list2;
          break;
      }
      console.log(1);
  }
  return head;
};

console.log(JSON.stringify(mergeTwoLists(list1, list2)));
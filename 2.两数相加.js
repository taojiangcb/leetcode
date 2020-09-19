/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 */
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0);
    add(l1,l2,res);
    return res.next;
};

let carry_num = 0;

function add(first,second,res) {
    let num_one = first ? first.val : 0;
    let num_tow = second ? second.val : 0;

    // console.log(`1:`);
    // console.log(first);
    // console.log(`2:`);
    // console.log(second);

    let sum = num_one + num_tow + carry_num;
    carry_num = 0;

    if(sum >= 10) {
        carry_num = 1;
        sum -= 10;
    }

    res.next = new ListNode(sum);
    // console.log(`========`);
    // console.log(res);

    let next_one = first ? first.next : null;
    let next_two = second ? second.next : null;

    if(next_one == null && next_two == null && carry_num == 0) {
        return;
    }
    else {
        add(next_one,next_two,res.next);
    }
}


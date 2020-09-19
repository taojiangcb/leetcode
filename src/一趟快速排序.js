
function quickSort(list, begin, end) {
  if (!list || list.length < 2) return;
  let x = list[begin];
  let p1 = begin || 0;                    //左指针
  let p2 = end || list.length - 1;        //又指针
  let dr = true;                          //方向
  l1:
  while (p1 < p2) {
    if (dr) {
      for (let i = p2; i > p1; i--) {
        //和标量对比
        if (list[i] <= x) {
          list[p1] = list[i];             //交换位置里的数字
          p1++;                           //左边指针 + 1
          p2 = i;                         //设置右边指针
          dr = !dr;                       //改变方向
          continue l1;
        }
      }
      p2 = p1;      //指针重合
    }
    else {
      for (let i = p1; i < p2; i++) {
        if (list[i] >= x) {
          list[p2] = list[i];
          p2--;
          p1 = i; 
          dr = !dr;
          continue l1;
        }
      }
      p1 = p2;
    }
  }

  list[p1] = x;                     //p1,p2 相撞了，标量放回去
  quickSort(list, begin, p1 - 1);   //递归 左边
  quickSort(list, p1 + 1, end)      //递归右边
}
 

function quickStart(aList) {
  console.log(aList);
  quickSort(aList, 0, aList.length - 1);
  console.log(aList);
}

quickStart([15, 22, 13, 9, 16, 33, 15, 23, 18, 4, 33, 25, 14]);
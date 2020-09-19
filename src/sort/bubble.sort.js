
/**
 * 
 * @param {*} arr 
 * 冒泡排序 
 * 1. 
 */

//冒泡排序 每次和下个指针比较，最大的值放在最右边
function bubblesourt(arr) {
  let dataSource = arr;
  let swap = function(a,b) {
    let v1 = dataSource[a];
    let v2 = dataSource[b];
    if(v1 > v2) {
      dataSource[a] = v2; 
      dataSource[b] = v1;
    }
  }
  for(let outter=arr.length; outter >= 2; outter--) {
    for(let innert = 0; innert < outter-1; innert ++) { 
      swap(innert,innert + 1);
    }
  }
}

let t = [6,2,4,9,1,3,5];
bubblesourt(t);
console.log(t);




//选择排序，每次找出最小的值放在最左边
function selectorSort(arr) {
  let dataSource = arr;
  const swap = function(a,b) {
    let v1 = dataSource[a];
    let v2 = dataSource[b];
    if(v1 > v2) {
      dataSource[a] = v2; 
      dataSource[b] = v1;
    }
  }

  let min = dataSource[0];
  for(let outter = 0; outter < dataSource.length - 2; outter ++) {
    for(let inner = outter + 1; inner < dataSource.length; inner ++) {
      let x = dataSource[inner];
      if( min > x) {
        swap(outter,inner);
      }
    }
  }
}

let t = [6,2,4,9,1,3,5];
selectorSort(t);
console.log(t);


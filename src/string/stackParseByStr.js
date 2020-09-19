
function parseStr(str) {
  let theStack = [];
  const stacks = [];
  const globalStack = theStack;
  
  const lastStack = function () {
    return stacks.length > 0 ? stacks[stacks.length - 1] : theStack;
  }

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '(') {
      const ns = [];
      stacks.push(ns); theStack.push(ns);
      theStack = ns;
    }
    else if (c === ')') { continue }
    else if (c === '<') {
      let count = '';
      while (i < str.length && str[i + 1] !== '>') { count += str[i + 1]; i++; }
      str[i + 1] === '>' && i++;
      {
        const stack = lastStack();
        const c = stack[stack.length - 1];
        let n = Number(count);
        while (n > 1) { stack.push(c); n-- };
        stacks.pop();
      }
    }/*  */
    else {
      const stack = lastStack();
      stack.push(c);
    }
  }
  return globalStack.flat(Infinity).join('');
}

console.log(parseStr('a(b)<2>c'));
console.log(parseStr('a(b(c)<3>de)<2>f'));

let countBinarySubstrings = function (s) {
  let n = 0, pre = 0, curr = 1
  for (let i = 0, len = s.length; i < len - 1; i++) {
    if (s[i] == s[i+1]) {
      curr++
    } else {
      pre = curr
      curr = 1
    }
    if (pre >= curr) n++
  }
  return n
}
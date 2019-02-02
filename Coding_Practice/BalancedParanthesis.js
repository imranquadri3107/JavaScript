function isBalanced(s) {
  let brackets = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  s = s.split('')
  let stack = []

  while (s.length) {
    let a = s.pop()
   // console.log(a);
    if (!brackets[a]) {
      stack.push(a)
      console.log(stack);
    } else if (brackets[a] !== stack.pop()) {
      return "NO"
    }
  }

  return  s.length ? "NO"  : "YES"

}
isBalanced('{{[[(())]]}}');

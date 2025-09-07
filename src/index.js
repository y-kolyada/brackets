function check(str, bracketsConfig = []) {
  if (bracketsConfig[0].length % 2 !== 0 || typeof str !== 'string') {
    return false;
  }

  const openBrackets = bracketsConfig.map((item) => item[0]);
  const closeBrackets = bracketsConfig.map((item) => item[1]);

  let parsedStr = str;
  let found = true;
  while (found) {
    found = false;
    for (let i = 0; i < bracketsConfig.length; i += 1) {
      while (parsedStr.includes(openBrackets[i] + closeBrackets[i])) {
        parsedStr = parsedStr.replace(openBrackets[i] + closeBrackets[i], '');
        found = true;
      }
    }
  }

  return parsedStr.length === 0;
}

module.exports = check;

// console.log(check('()', [['(', ')']])) // -> true
// console.log(check('((()))()', [['(', ')']])) // -> true
// console.log(check('())(', [['(', ')']])) // -> false
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])) // -> true
// console.log(check('[(])', [['(', ')'], ['[', ']']])) // -> false
// console.log(check('[]()', [['(', ')'], ['[', ']']])) // -> true
// console.log(check('[]()(', [['(', ')'], ['[', ']']])) // -> false
// console.log(check('||||', [['|', '|']])) // -> true
// console.log(check('||||', [['|', '|']])) // -> true
// console.log(check('([)]', [['(', ')'], ['[', ']']])) // -> false

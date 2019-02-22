module.exports = function check(str, bracketsConfig) {
  const openingBrackets = [];
  const closingBrackets = [];
  const strCheck = [];
  for(let i = 0; i < bracketsConfig.length; i++) {
    openingBrackets.push(bracketsConfig[i][0]);
    closingBrackets.push(bracketsConfig[i][1]);
  }

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if ((str[i] === closingBrackets[j]) && (strCheck.length === 0) && (str[i] !== openingBrackets[j]))
        return false;
      else if((str[i] === closingBrackets[j]) && (strCheck[strCheck.length-1] === openingBrackets[j]))
        strCheck.pop();
      else if(str[i] === openingBrackets[j])
        strCheck.push(str[i]);
    }
  }

  if(strCheck.length === 0) 
    return true;
  else 
    return false;
}

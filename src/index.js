module.exports = function check(str, bracketsConfig) {
  let array = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    array.push(bracketsConfig[i].join(''));
  }


  for (let j = 0; j < bracketsConfig.length; j++ ) {
    if (str.includes(array[j])) {
      str = str.replace(array[j], '');
      j = -1;
    }
  }
  return str.length === 0;
}

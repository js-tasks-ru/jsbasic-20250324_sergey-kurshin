function camelize(str) {
  let words = str.split('-');
  let arr = words.map(function (word, index) {
    if ( index == 0 ) return word;
    return word[0].toUpperCase() + word.slice(1);
  })
  return arr.join('');
}

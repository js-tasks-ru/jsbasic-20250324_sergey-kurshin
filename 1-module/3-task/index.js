function ucFirst(str) {
  let capitalLetterStr = '';
  if ( str.length > 1 ) {
    capitalLetterStr = str[0].toUpperCase() + str.slice(1);
    return capitalLetterStr;
  }
  if ( str.length == 1 ) {
    return str.toUpperCase();
  }

  return str;
}

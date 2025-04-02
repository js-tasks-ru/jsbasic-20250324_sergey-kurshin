function isEmpty(obj) {
  /*на сколько верная запись не знаю
    думаю Что если входит в цикл то
    значит он не пустой
  */
  for ( let key in obj ) {
    return false;
  }
  return true;
}


/*
Также нашел такой метод Object.keys(obj)
return Object.keys(obj).length == 0
*/

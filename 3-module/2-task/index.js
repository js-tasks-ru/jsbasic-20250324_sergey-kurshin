function filterRange(arr, a, b) {
  if ( a > b ) {
    let c = a;
    a = b;
    b = c;
  }

 return arr.filter( item => item >= a && item <= b );
}

function factorial(n) {
  let a = 0;
  if ( !n ) {
    return 1;
  }
  for ( let i = 1; i <= n; i += 1 ) {
    if ( i == 1 ) {
      if ( n == i ) return 1;
      a = n * ( n - i) ;
    } else {
      if ( n - i == 0 ) return a;
      a = a * ( n - i );
    }
  }
  return a;
}

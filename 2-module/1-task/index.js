function sumSalary(salaries) {
  let sum = 0;
  for ( let item in salaries ) {
    if ( isFinite(salaries[item]) ) {
      sum = sum += salaries[item];
    }
  }
  return sum;
}

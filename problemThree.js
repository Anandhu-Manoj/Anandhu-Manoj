function printSeriesUpToA(a) {
  let i = 1;
  let result = [];

  while (i <= a) {
    result.push(i);
    i += 2;
  }

  console.log(result.join(", "));
}


printSeriesUpToA(7); 
//i used while here since limit is unknown we can use for also here same logic as the second question  

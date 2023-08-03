function fibs(n) {
  let arr = [];
  if (n === 0) {
    arr.push(0);
  } else {
    let a = 0;
    let b = 1;
    arr.push(a);
    arr.push(b);
    for (let i = 2; i < n; i++) {
      let c = a + b;
      a = b;
      b = c;
      arr.push(c);
    }
  }
  return arr;
}
console.log("Fibonocci sequence using iteration : " + fibs(8));

function fibonacciSeries(n, a = 0, b = 1, series = []) {
  if (n <= 1) {
    series.unshift(n);
    return series;
  } else {
    const nextNumber = a + b;
    series.push(nextNumber);

    return fibonacciSeries(n - 1, b, nextNumber, series);
  }
}
console.log("Fibonocci sequence using Recursion : " + fibonacciSeries(8));

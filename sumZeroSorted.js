let sumZero = arr => {
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let absoluteN = Math.abs(n);
    if (arr.indexOf(absoluteN) !== -1) {
      return [n, arr[arr.indexOf(absoluteN)]];
    }
  }
};

let array = [-11, -8, -3, 1, 2, 5, 8, 23];
let uArray = [-2, -3, 1, 8, 14, -6, 7, 3];
console.log(sumZero(uArray));

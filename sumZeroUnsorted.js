function sumZeroUnsorted(arr) {
  let positiveObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveObj[arr[i]] = i;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let posN = Math.abs(arr[i]);
    if (arr[i] < 0 && positiveObj[posN] !== undefined) {
      return [arr[i], arr[positiveObj[posN]]];
    }
    if (
      arr[i] === 0 &&
      positiveObj[arr[i]] !== undefined &&
      positiveObj[arr[i]] !== i
    ) {
      return [arr[i], arr[positiveObj[0]]];
    }
  }
  return false;
}
console.log(sumZeroUnsorted([3, -1, 0, 5, 3, 0, 5]));

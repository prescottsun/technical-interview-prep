var myArr = [1, 3, 20, -7, 6,18,22];
function largestSum(anArr, N) {
let total = 0;
anArr.forEach((num, i) => {
 if (i >= 0 && i <= N-1){
   total += num;
 }
})
newTotal = total;
 for(let left = 0; left <= anArr.length-N-1; left++) {
   let right = left + N;
   newTotal = newTotal + anArr[right] - anArr[left];
   total = Math.max(total, newTotal);
   console.log(anArr[left], anArr[right], total)
 }
 return total;
}
console.log(largestSum(myArr, 3));
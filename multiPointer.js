let array = [-6, -3, -2, -1, 0, 3, 4, 5, 8, 9]


function sumZero(array) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {

    if (array[i] + array[j] > 0){
        j--;
    }
    if (array[i] + array[j] < 0){
        i ++;
    }
    if (array[i] + array[j] === 0 && i!=j) {
        arr0 = [array[i], array[j]];
        return arr0
    }

    }
    return undefined
}

console.log(sumZero(array))
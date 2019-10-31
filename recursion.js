function countdown(x){
    if (x === 0 ) return;
    console.log(x);
    return countdown(x-1);
}
countdown(5);


function sumRange(x){
    if(x === 0) return 0;
    return x + sumRange(x-1);
}
console.log(sumRange(3));

function factorial(x){
    if (x === 1 ) return 1;
    return x * factorial(x-1);
}
console.log(factorial(3));

function productOfArray(arr){
    if (arr.length === 1) return arr[0];

    return arr.splice(0,1)[0] * productOfArray(arr);
}

arr = [1, 2, 3, 10]
console.log(productOfArray(arr))


function contains(dict, value){
    for(let key in dict){
        if (typeof dict[key] === 'object'){
            return contains(dict[key], value);
        }
        if (dict[key] === value){
            return true;
        }
    }
    return false;
}


let nestedObject = { data: {
    info: {
        stuff: {
            thing: {
                moreStuff: {
                    magicNumber: 44,
                    something: 'foo2'
                }
            }
        },
        morestuff: {
            thing: {
                moreStuff2: {
                    magicNumber: 445,
                    something: 'foobar'
                }
            }
        },
        evenmore: {
            thing: {
                moreStuff2: {
                    magicNumber: [9,6,7,5000],
                    something: 'foobar'
                }
            }
        },
    }
}
}

console.log(contains(nestedObject, 44));
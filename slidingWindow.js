//reading the array n^2 times:
//solution WITHOUT sliding window
function lowestPrice(arr,discount,K) {
    let totalCost = 0
    //calculate the total sum first:
    arr.forEach(price => {
        totalCost += price;
    })
    console.log(totalCost);
 
    //or use a fancy reduce method:
    let totalCost2 = arr.reduce((prev, price) => {
        return prev + price
    },0)
    console.log(totalCost2);
 
    let lowestCost = totalCost;
 
    for (let pointer = 0; pointer <= arr.length-K; pointer ++) {
 
        let newCost = 0;
        //the forEach method is just like a for loop.  
        //it cycles over the entire array...
        //so, this is a loop inside a loop and it has O(n^2) complexity
        arr.forEach((price,i) => {
            if (i >= pointer && i <= (pointer+K-1)) {
                newCost += (price * (1-discount))
            }
            else {
                newCost += price
            }
        })
        console.log(`index ${pointer}  cost is ${newCost}`);
         lowestCost = Math.min(lowestCost,newCost)
    }
    console.log(`The lowest Price is ${lowestCost}`);
}
 
let prices = [7,54,56,20,12,1,.5,0.5,3.55,190,200,.43,1,7,3,8,200,500,1.9,190,180,340]
 
lowestPrice(prices,0.2,3)
 
 
// sliding window solution:
 
function lowestPriceSliding(arr,discount,K) {
 
    let totalCost = 0
    //calculate the total sum first, assuming the discount is applied to the first K values
    arr.forEach((price,i) => {
        if (i >= 0 && i <= (K-1)) {
            totalCost += (price * (1-discount))
        }
        else {
            totalCost += price;
        }
    })
    let newCost = totalCost
 
    console.log(`origianl cost with first slider ${totalCost}`);
 
    for (let left = 0; left <= arr.length-K-1; left ++) {
        let right = left + K ;
        newCost = newCost + (arr[left] * discount) - (arr[right] * discount)
        console.log(`left ${left} right ${right} totalcost: ${newCost}`);
        totalCost = Math.min(totalCost,newCost)
        
    }
    console.log(`The sliding lowest price is ${totalCost}`);
}
lowestPriceSliding(prices,0.2,3)

//reading the array n^2 times:

function lowestPrice(arr,discount,K) {

    let totalCost = 0

    //calculate the total sum first:

    arr.forEach(price => {

        totalCost += price;

    })

    console.log(totalCost);

    //or use a fancy reduce method:

    let totalCost2 = arr.reduce((prev, price) => {

        return prev + price

    },0)

    console.log(totalCost2);

    let lowestCost = totalCost;

    for (let pointer = 0; pointer <= arr.length-K; pointer ++) {

        let newCost = 0;

        //the forEach method is just like a for loop.  

        //it cycles over the entire array...

        //so, this is a loop inside a loop and it has O(n^2) complexity

        arr.forEach((price,i) => {

            if (i >= pointer && i <= (pointer+K-1)) {

                newCost += (price * (1-discount))

            }

            else {

                newCost += price

            }

        })

        console.log(`index ${pointer}  cost is ${newCost}`);

         lowestCost = Math.min(lowestCost,newCost)

    }

    console.log(`The lowest Price is ${lowestCost}`);

}

let prices = [7,54,56,20,12,1,.5,0.5,3.55,190,200,.43,1,7,3,8,200,500,1.9,190,180,340]

lowestPrice(prices,0.2,3)

// sliding window:

function lowestPriceSliding(arr,discount,K) {

    let totalCost = 0

    //calculate the total sum first, assuming the discount is applied to the first K values

    arr.forEach((price,i) => {

        if (i >= 0 && i <= (K-1)) {

            totalCost += (price * (1-discount))

        }

        else {

            totalCost += price;

        }

    })

    let newCost = totalCost

    console.log(`origianl cost with first slider ${totalCost}`);

    for (let left = 0; left <= arr.length-K-1; left ++) {

        let right = left + K ;

        newCost = newCost + (arr[left] * discount) - (arr[right] * discount)

        console.log(`left ${left} right ${right} totalcost: ${newCost}`);

        totalCost = Math.min(totalCost,newCost)

        

    }

    console.log(`The sliding lowest price is ${totalCost}`);

}

lowestPriceSliding(prices,0.2,3)
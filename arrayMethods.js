sneakers = [
    { Id: 1, Brand: "Nike", Style: "Sacai Blazer", Price: 120 },
    { Id: 2, Brand: "Adidas", Style: "Ultraboost", Price: 180 },
    { Id: 3, Brand: "Nike", Style: "Air Jordan 1", Price: 160 },
    { Id: 4, Brand: "Vans", Style: "Old Skool", Price: 70 }
];

console.log(
    sneakers.map(function(sneaker) {
        return sneaker.Brand;
}))

doStuff = function(parameter) {
    // things
}

console.log(sneakers.map(sneaker => sneaker.Brand));

console.log(sneakers.map(sneaker => sneaker.Price/2));

console.log(sneakers.filter(sneaker => sneaker.Price < 100));

console.log(sneakers.filter(function(sneaker){
    return sneaker.Brand === "Nike";
}));

console.log(sneakers.map(sneaker => '${sneaker.Brand} ${sneaker.Style}'));
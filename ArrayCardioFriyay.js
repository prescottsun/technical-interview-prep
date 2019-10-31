// 1. How would you test to see if some variable is an array or not?
Array.isArray()
// 2. If you have two arrays, how could you go about combining them end-to-end? ex [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
array1.concat(array2))
// 3. Say you have an array ["3423 Piedmont Rd NE", "Atlanta", "GA", "30305"], how would you combine the items to read "3423 Piedmont Rd NE, Atlanta, GA, 30305"?
array.join(' ')
// 4. In one line, how do you find the index of "Red" in the array ["Red", "Blue", "Green"]?
array.indexOf('Red')
// 5. What is the difference between array.forEach and array.map?
array.map returns a new array
// Get your shorts on - this is an array workout!

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log(inventors.filter(born => born.year >=1500 && born.year <1600));
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log(
  inventors.map(name => `${name.first} ${name.last}`)
);
// Array.prototype.sort()
// 3. Sort the inventors arrby birthdate, oldest to youngest
console.log(
  inventors.sort((a, b) => a.year - b.year)
);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log(
  inventors.reduce((accumulator, currentValue) => accumulator + currentValue.passed - currentValue.year, 0)
);
// 5. Sort the inventors by years lived
console.log(
  inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
);

const friends = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// 6. Array.prototype.some() // is at least one friend 19 or older?
console.log(friends.some(friend => 2019 - friend.year > 19));
// 7. Array.prototype.every() // are all friends 19 or older?
console.log(friends.every(friend => 2019 - friend.year > 19));
// 8. Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log(
  comments.find(comment => comment.id === 823423)
);

// 9. Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log(
  comments.splice(comments.findIndex(comment => comment.id === 823423),1)
);
console.log(comments);

// ========SUPER HARD EXERCISES BELOW========
// 10. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// HINT: Do this directly in the browser console
const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));
console.log(category)
console.log(links)
console.log(de)

// 11. sort Exercise
// Sort the people array alphabetically by last name
const sortedNames = people.sort((current, next) => {
  const [aLast, aFirst] = current.split(', ');
  const [bLast, bFirst] = next.split(', ');
  return aFirst > bFirst ? 1 : -1;
});
console.log(sortedNames)
// 12. reduce Exercise
// Sum up the instances of each item in the array below:
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

const countData = data.reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item] ++;
  return obj;
}, {});
console.log(countData);
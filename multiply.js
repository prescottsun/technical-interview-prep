let multiply = (a, b) => {
  let solution = 0;
  for (let i = 0; i < b; i++) {
    solution += a;
  }
  return console.log(solution);
};

multiply(5, 6);

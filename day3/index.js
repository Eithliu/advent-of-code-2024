import fs from 'node:fs';

fs.readFile('./day3/data.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }

  const reg = /mul\(([0-9]+,[0-9]+)\)/g;
  const arr = data.match(reg);

  const digits = /\d+/g;
  const digitsToAdd = arr.join('+').match(digits);
  let result = 0;
  for (let i = 0; i < digitsToAdd.length; i++) {
    result += digitsToAdd[i] * digitsToAdd[i+1];
    i++;
  }
  console.log(result);
});

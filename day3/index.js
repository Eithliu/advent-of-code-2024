import fs from 'node:fs';

fs.readFile('./day3/data.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const enabled = true;

  const reg = /mul\(([0-9]+,[0-9]+)\)|do\(|don't\(/g;
  const arr = data.match(reg);

  const goodArr = [];
  const badArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    const nextItem = arr[i+1];
    if (currentItem === "don't(") {
      while (currentItem === 'don\'t(' && arr[++i] !== 'do(')
      {
        badArr.push(arr[i])
      }
    } else {
      goodArr.push(currentItem);
    }
  }
  console.log('ici ?', goodArr, badArr);
  const digits = /\d+/g;
  const digitsToAdd = goodArr.join('+').match(digits);
  let result = 0;
  for (let i = 0; i < digitsToAdd.length; i++) {
    result += digitsToAdd[i] * digitsToAdd[i+1];
    i++;
  }
  console.log(result);
});

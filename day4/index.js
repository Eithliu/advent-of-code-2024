import fs from 'node:fs';

fs.readFile('./day4/data1.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }

  // pour à gauche et à droite
  let count = 0;
  const arr = data.split('\n');
  /*
  const reg = /XMAS/g
  let newArr = [];
  for (const word of arr) {
    newArr.push(word.match(reg))
  }
  const reverseReg = /SAMX/g
  for (const word of arr) {
    newArr.push(word.match(reverseReg))
  }
  count += newArr.filter((ar) => ar !== null).length
  console.log(count);
*/
  // pour haut et bas
  for (let j = 0; j < arr.length; j++) {
    const currEl = arr[j];
    const nextLine = arr[j+1];
    const thirdLine = arr[j+2];
    const fourthLine = arr[j+3];

    const line = currEl.split('');
    for (let i = 0; i < line.length; i++) {
      const letter = i;
      const nextLetter = i+1;
      const thirdLetter = i+2;
      const fourthLetter = i+3;

      if (line[letter] === 'X' && nextLine[letter] === 'M' && thirdLine[letter] === 'A' && fourthLine[letter] === 'S') { // |bas xmas
        count++;
      } else if (line[letter] === 'S' && nextLine[letter] === 'A' && thirdLine[letter] === 'M' && fourthLine[letter] === 'X') { // |bas samx
        count++;
      } else if (line[letter] === 'X' && nextLine[nextLetter] === 'M' && thirdLine[thirdLetter] === 'A' && fourthLine[fourthLetter] === 'S') { // \bas xmas
        count++;
      } else if (line[letter] === 'S' && nextLine[nextLetter] === 'A' && thirdLine[thirdLetter] === 'M' && fourthLine[fourthLetter] === 'X') { // \bas samx
        count++;
      } else if (line[fourthLetter] === 'X' && nextLine[thirdLetter] === 'M' && thirdLine[nextLetter] === 'A' && fourthLine[letter] === 'S') { // /bas xmas
        count++;
      } else if (line[fourthLetter] === 'S' && nextLine[thirdLetter] === 'A' && thirdLine[nextLetter] === 'M' && fourthLine[letter] === 'X') { // /bas samx
        count++;
      } else if (line[letter] === 'X' && line[nextLetter] === 'M' && line[thirdLetter] === 'A' && line[fourthLetter] === 'S') { // -> xmas
        count++;
      } else if (line[letter] === 'S' && line[nextLetter] === 'A' && line[thirdLetter] === 'M' && line[fourthLetter] === 'X') { // -> samx
        count++;
      }
    }
  }
  console.log(count)
});

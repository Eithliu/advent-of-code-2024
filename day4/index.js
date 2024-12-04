import fs from 'node:fs';

fs.readFile('./day4/data1.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const arr = data.split('\n');

  let count = 0;

  for (let i = 0; i < arr.length -3; i++) {
    const currLine = arr[i];

    for (let j = 0; j < currLine.length -3; j++) {

      if (arr[i][j] === 'X' && arr[i][j+1] === 'M' && arr[i][j+2] === 'A' && arr[i][j+3] === 'S') {
        count++;
      } else if (arr[i][j] === 'S' && arr[i][j+1] === 'A' && arr[i][j+2] === 'M' && arr[i][j+3] === 'X') {
        count++;
      } else if (arr[i][j] === 'X' && arr[i+1][j] === 'M' && arr[i+2][j] === 'A' && arr[i+3][j] === 'S') {
        count++;
      } else if (arr[i][j] === 'S' && arr[i+1][j] === 'A' && arr[i+2][j] === 'M' && arr[i+3][j] === 'X') {
        count++;
      } else if (arr[i][j] === 'X' && arr[i+1][j+1] === 'M' && arr[i+2][j+2] === 'A' && arr[i+3][j+3] === 'S') {
        count++;
      } else if (arr[i][j] === 'S' && arr[i+1][j+1] === 'A' && arr[i+2][j+2] === 'M' && arr[i+3][j+3] === 'X') {
        count++;
      } else if (arr[i][j] === 'X' && arr[i-1][j-1] === 'M' && arr[i-2][j-2] === 'A' && arr[i-3][j-3] === 'S') {
        count++;
      } else if (arr[i][j] === 'S' && arr[i-1][j-1] === 'A' && arr[i-2][j-2] === 'M' && arr[i-3][j-3] === 'X') {
        count++;
      }

    }
  }
  console.log(count);
})
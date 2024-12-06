import fs from 'node:fs';

fs.readFile('./day6/data2.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const matrixStep1 = data.split('\n');
  const matrix = matrixStep1.map((el) => el.split(''));

  let x = 0;
  let y  = 0;

  let isGuardInGrid = true;

  while (isGuardInGrid) {
  for (let i = 0; i < matrix.length -1; i++) {
    for (let j = 0; j < matrix[i].length -1; j++) {
      const currEl = matrix[i][j];
      const upEl = matrix?.[i-1]?.[j];
      const rightEl = matrix?.[i]?.[j+1];
      const downEl = matrix?.[i+1]?.[j];
      const leftEl = matrix?.[i]?.[j-1];

      if (!isPlayer(currEl)) continue;

      matrix[i][j] = 'X';
      if (isFacingUp(currEl)) {
        if (upEl !== '#') {
          matrix[i-1][j] = '^';
        } else {
          matrix[i][j+1] = '>';
        }
        if (!upEl) isGuardInGrid = false;
      }
      if (isFacingRight(currEl)) {
        if (rightEl !== '#') {
          matrix[i][j+1] = '>';
        } else {
          matrix[i+1][j] = 'v';
        }
        if (!rightEl) isGuardInGrid = false;
      }
      if (isFacingDown(currEl)) {
        if (downEl !== '#') {
          matrix[i+1][j] = 'v';
        } else {
          matrix[i][j-1] = '<';
        }
        if (!downEl) isGuardInGrid = false;
      }
      if (isFacingLeft(currEl)) {
        if (leftEl !== '#') {
          matrix[i][j-1] = '<';
        } else {
          matrix[i-1][j] = '^';
        }
        if (!leftEl) isGuardInGrid = false;
      }
    }
  }
}

  console.log(matrix.flat().filter((e) => e === 'X').length)
})

function isPlayer(el) {
  return !(el === '.' || el === 'X' || el === '#');
}

function isFacingUp(el) {
  return el === '^';
}

function isFacingRight(el) {
  return el === '>';
}

function isFacingDown(el) {
  return el === 'v';
}

function isFacingLeft(el) {
  return el === '<';
}

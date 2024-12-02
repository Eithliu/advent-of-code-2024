import fs from 'node:fs';

fs.readFile('./day2/data.txt', "utf8", (e, data) => {
  if (e) {
    console.error(e);
    return;
  }
  const reports = data.split('\n');
  const levels = reports.map((line) => {
    return line.split(' ');
  });
  const goodArray = [];
  for (const level of levels) {
    if (level.join('') === level.toSorted((a, b) => a-b).join('')) {
      goodArray.push(level);
    } else if (level.join('') === level.toSorted((a, b) => b-a).join('')) {
      goodArray.push(level);
    } else {
      console.log('-')
    }
  }

  let count = 0;
  let safe = new Map();
  for (const array of goodArray) {

    for (let i = 0; i <= array.length -1; i++) {
      const currentItem = parseInt(array[i]);
      const nextItem = parseInt(array[i + 1]);
      if ((Math.abs(currentItem - nextItem) < 1) || (Math.abs(currentItem - nextItem) > 3)) {
        safe.has(array.join('')) ? safe.get(array.join('')) : safe.set(array.join(''), count++);
      }
    }
  }
  console.log('mon compte :', Math.abs((goodArray.length -1) - safe.size));
});

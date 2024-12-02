import fs from 'node:fs';

fs.readFile('./day1/data.txt', "utf8", (e, data) => {
    if (e) {
        console.error(e);
        return;
    }
    const step1 = data.split('\n');
    console.log('#############')
    console.log(step1);
    console.log('#############')
    let left = [];
    let right = [];
    let fullData = [];
    for (const l of step1) {
        fullData.push(l.split('   '));
    }
    const formattedData =  fullData.flatMap((a) => a);
    console.log('_____________')
    console.log(formattedData);
    console.log('_____________')

    for (let i = 0; i < formattedData.length; i++) {
        if (i % 2 !== 0) {
            right.push(formattedData[i]);
        } else {
            left.push(formattedData[i]);
        }
    }
    console.log('left & right', left, right);

    right.sort((a, b) => a-b);
    left.sort((a, b) => a-b);
    let count = 0;
    for (let i = 0; i < right.length; i++) {
        console.log(right[i], left[i])
        count += Math.abs(right[i] - left[i]);
    }
    console.log(count)
})

const incr = (d: Array<number>) => {
  if (d.every(v => v === 9)) {
    d.push(1);
    d.every((v, i) => d[i] = v % 9);
  } else {
    d.every((v, i) => {return v !== 9 ? !(++d[i]) : !(d[i] = 0)});
    for (let i = 0; i < d.length; i++) {
      if (d[i] !== 9) {
        d[i]++;
        break;
      } else {
        d[i] = 0;
      }
    }
  }
}
const specialNums = (maxDigits: number) => {
  for(let r1 = 0, r2 = '', d = [0]; d.length < maxDigits + 1; r1 = 0, r2 = '', incr(d)) {
    d.forEach(v => {
      r1 += v**v;
      r2 += `${v}`;
    });
    if (`${r1}` == r2) console.log(r1); // it's special
  }
}
specialNums(10)
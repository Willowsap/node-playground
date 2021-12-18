const inc = d => {
  if (d.every(v => v == 9)) {
    d.push(1);
    d.forEach((v, i) => d[i] = v % 9);
  } else {
    d.every((v, i) => {return v != 9 ? !(++d[i]) : !(d[i] = 0)});
  }
}
const specialNum = maxDigits => {
  for(let r1 = 0, r2 = '', d = [0]; d.length < maxDigits + 1; r1 = 0, r2 = '', inc(d)) {
    d.forEach(v => {
      r1 += v**v;
      r2 += `${v}`;
    });
    if (`${r1}` == r2) console.log(r1);
  }
}
specialNum(5);

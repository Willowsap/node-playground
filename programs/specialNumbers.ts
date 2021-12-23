import Utils from "../services/util.service";

export module Specialnumbers {
  export const willowsVersion = (maxDigits: number) => {
    for (
      let d = [0], r1 = 0, r2 = "";
      d.length < maxDigits + 1;
      r1 = 0, r2 = ""
    ) {
      d.forEach((v) => {
        r1 += v ** v;
        r2 += `${v}`;
      });
      if (`${r1}` == r2) console.log(r1);
      if (d.every((v) => v === 9)) {
        d.push(1);
        d.every((v, i) => (d[i] = v % 9));
      } else {
        d.every((v, i) => {
          return v !== 9 ? !++d[i] : !(d[i] = 0);
        });
      }
    }
  };
  
  export const bartsVersion = (limit: number) => {
    for (let d = 1, sum = 0, rem: number; d <= limit; d++) {
      for (
        sum = 0, rem = d;
        rem > 0;
        sum += (rem % 10) ** (rem % 10), rem = Math.floor(rem / 10)
      );
      if (sum === d) console.log(sum);
    }
  };

  export const compareVersions = () => {
    Utils.timedRun({
      func: willowsVersion,
      params: 7,
      start: "Willow's version",
      newLine: true,
    });
    Utils.timedRun({
      func: bartsVersion,
      params: 10000000,
      start: "Bart's version",
    });
    
  }
}
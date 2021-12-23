interface ResultStats {
  numActions: number,
  xpGain: number,
  xp: number,
  level: number
}
interface Input {
  xpPerAction: number;
  initialXp: number;
}
const calcLevel = (xp: number): number => {
  for (let total = 0, level = 1;; level++) {
    total += Math.floor(level + 300 * (2 ** (level / 7)));
    if (Math.floor(total / 4) >= xp || level === 120) return level;
  }
}

const xpPet = ({
  xpPerAction,
  initialXp,
}: {
  xpPerAction: number,
  initialXp: number,
}): ResultStats => {
  const results = {
    numActions: 0,
    xpGain: 0,
    xp: initialXp,
    level: calcLevel(initialXp)
  }
  while (true) {
    let levelBonus = results.xp === 200000000 ? 200 : results.level;
    const chance = Math.ceil(50000000 / ((xpPerAction / 25) * levelBonus));
    results.numActions++;
    results.xpGain += xpPerAction;
    results.xp += xpPerAction;
    results.level = calcLevel(results.xp);
    if (Math.floor((Math.random() * chance)) === 1) {
      return results;
    }
  }
}

const calcAverage = (numSamples: number, input: Input) => {
  const results: Array<ResultStats> = []
  for(let i = 0; i < numSamples; i++) {
    results.push(xpPet(input))
    if (!(i % 10)) console.log(`finished sample ${i}`)
  }
  const result = { numActions: 0, xpGain: 0, xp: 0, level: 0, minActions: -1, maxActions: -1 };
  results.forEach(v => {
    result.numActions += v.numActions;
    result.xpGain += v.xpGain;
    result.xp += v.xp;
    result.level += v.level;
    if (v.numActions > result.maxActions) result.maxActions = v.numActions;
    if (v.numActions < result.minActions || result.minActions === -1) result.minActions = v.numActions;
  });
  result.numActions = Math.ceil(result.numActions / results.length);
  result.xpGain = Math.ceil(result.xpGain / results.length);
  result.xp = Math.ceil(result.xp / results.length);
  result.level = Math.ceil(result.level / results.length);
  return result;
}

const cooking = {xpPerAction: 270, initialXp: 21110225};
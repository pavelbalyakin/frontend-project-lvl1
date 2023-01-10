export const getRandomIntInclusive = (min, max) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

export const isEven = (num) => num % 2 === 0;

export const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

export const getProgression = () => {
  const result = [];
  const step = getRandomIntInclusive(1, 100);
  let start = getRandomIntInclusive(1, 100);
  const size = 10;
  for (let i = 0; i < size; i += 1) {
    result.push(start);
    start += step;
  }
  return result;
};

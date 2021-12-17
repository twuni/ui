export const average = (numbers) => {
  const { count, sum } = numbers.reduce((a, b) => {
    if (typeof b === 'number') {
      a.sum += b;
      a.count += 1;
    }
    return a;
  }, { count: 0, sum: 0 });

  if (count === 0) {
    return 0;
  }

  return sum / count;
};

export default average;

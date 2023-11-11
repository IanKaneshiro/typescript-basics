// In tsx you will need to add a trailing comma

const getRandomElement = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};

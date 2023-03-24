
//Счетчик для формирования нумерации ID...
function getCounter() {
  let count = 1;
  return function() {
    return count++;
  };
}

//Генератор случайных чисел...
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomInteger};
export {getCounter};

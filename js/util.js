/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @return {number|null} - случайное число
 */
const getRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || (min > max)) {
    return null
  }
  if (min == max) {
    return min
  }
  let randomInteger = Math.floor(Math.random() * (max + 1 - min) + min);
  return Math.floor(randomInteger);
};

/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @param {number} n - количество знаков после запятой
 * @return {number|null} - случайное число
 */
const getRandomDecimalNumber = function (min, max, n) {
  if (min < 0 || max < 0) {
    return null
  }
  if (min == max) {
    return +min.toFixed(n)
  }
  let randomNumber = Math.random() * (max - min) + min;
  return +randomNumber.toFixed(n);
};

/**
 * Функция, возвращающая случайный элемент из массива
 * @param {array} elements - исходный массив
 * @return {*} - случайный элемент массива
 */
const getRandomElementFromArray = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

/**
 * Функция, возвращающая массив случайной длины. Значения не должны повторяться
 * @param {array} array - исходный массив
 * @return {array} - массив случайной длины
 */
const getRandomArray = (array) => {
  let initialArray = array.slice();
  let newArray = [];
  const RANDOMCOUNTELEMENTS = getRandomInteger(1, array.length);

  while (initialArray.length > 0) {
    let randomIndex = getRandomInteger(0, initialArray.length - 1);
    let randomElement = initialArray.splice(randomIndex, 1)[0];
    newArray.push(randomElement);
  }
  return newArray.slice(0, RANDOMCOUNTELEMENTS);
};

export {getRandomInteger, getRandomDecimalNumber, getRandomElementFromArray, getRandomArray}

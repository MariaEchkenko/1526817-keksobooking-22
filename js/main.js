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
}

getRandomInteger(1,5);

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
}

getRandomDecimalNumber(1.1,1.6,3);

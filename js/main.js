//Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInteger = function (min, max) {
  let minNumber = Math.ceil(min);
  let maxNumber = Math.floor(max);
  if (min<0 || max<0 || (minNumber>max && maxNumber<min)) {
    return null
  }
  if (minNumber == maxNumber) {
    return minNumber
  }

  //Пример функции взят с MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  let randomInteger = Math.floor(Math.random() * (maxNumber + 1 - minNumber) + minNumber);
  return Math.floor(randomInteger);
}

getRandomInteger(1,5);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomDecimalNumber = function (min, max, n) {
  if (min<0 || max<0) {
    return null
  }
  if (min == max) {
    return +min.toFixed(n)
  }
  let randomNumber = Math.random() * (max - min) + min;
  return +(randomNumber.toFixed(n));
}

getRandomDecimalNumber(1.1,1.6,3);

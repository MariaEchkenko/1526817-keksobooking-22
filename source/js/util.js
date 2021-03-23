/**
 * Функция для склонения существительных
 * @param {number} numeral - числовое значение
 * @param {array} declension - массив с вариантами склонения существительного
 * @return {*}
 */
const makePlural = (numeral, declension) => {
  let n = numeral % 10;
  if (n == 1 & numeral != 11) {
    return `${numeral} ${declension[0]}`;
  }
  if ((numeral < 10 || numeral > 20) && (n == 2 || n == 3 || n == 4)) {
    return `${numeral} ${declension[1]}`;
  }
  return `${numeral} ${declension[2]}`;
}

/** Функция дебаунс (устранение дребезга)
 * @param {} func - функция, которая выполнится после определенного промежутка времени
 * @param {number} timeWait - отрезок времени, который функция будет ожидать после последнего полученного действия, прежде чем выполнять func
 */
const debounce = (func, timeWait) => {
  let timeout;
  return  () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timeWait);
  };
}

export {makePlural, debounce}

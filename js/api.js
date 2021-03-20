const urlData = {
  get: 'https://22.javascript.pages.academy/keksobooking/data',
  send: 'https://22.javascript.pages.academy/keksobooking',
};

/**
 * Функция получения данных с сервера
 * @param {*} onSuccess - колбэк при успешном выполнении запроса
 * @param {*} onFail - колбэк при ошибке загрузки данных
 * @return {*}
 */
const getData = (onSuccess, onFail) => {
  fetch(urlData.get)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onFail('Ошибка при загрузке данных');
    });
};

/* Попытка переписать на async/await

const getData = async () => {
  let responce;
  try {
    responce = await fetch(urlData.get);
  } catch (error) => {
      onFail('Ошибка при загрузке данных'); - сюда функцию создания сообщения об ошибке?
    };

  const ads = await response.json();
  return ads;
}

(async () => {
  const ads = await getData();
  (ads) => {
    addPinsOnMap(ads);
    setFilterChange(debounce(() => renderPins(ads), RERENDER_TIME));
  }
})

*/


/**
 * Функция отправки данных на сервер
 * @param {*} onSuccess - колбэк при успешном заполнении формы
 * @param {*} onFail - колбэк при ошибке заполнении формы
 * @param {*} body - данные формы
 * @return {*}
 */
const sendData = (onSuccess, onFail, body) => {
  fetch(
    urlData.send,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};

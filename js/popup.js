const DATA_ERROR_SHOW_TIME = 3000;
const Z_INDEX_POPUP = 1000;

/**
 * Обработчик события на клавише Esc
 * @param {*} popup - попап, на который навешивается событие
 * @returns
 */
const onPopupEscKeydown = (popup) => {
  return (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      popup.remove();
      document.removeEventListener('keydown', onPopupEscKeydown(popup));
    }
  };
}

const main = document.querySelector('main');

/**
 * Функция создания попапа
 * @param {*} template  - шаблон для поп-апа
 * @param {Boolean} error  - true - для сообщения об ошибке, true - для сообщения об успешной отправке
 */
const createPopup = (template, error) => {
  const popup = template.cloneNode(true);
  popup.style.zIndex = Z_INDEX_POPUP;
  main.appendChild(popup);
  if (error) {
    const buttonError = popup.querySelector('.error__button');
    buttonError.addEventListener('click', () => {
      popup.remove();
    });
  }
  document.addEventListener('keydown', onPopupEscKeydown(popup));
  popup.addEventListener('click', () => {
    popup.remove();
  });
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

/** Создание сообщения об успешной отправке формы */
const createSuccessPopup = () => {
  createPopup(successTemplate, false);
}

/** Создание сообщения об ошибке при отправке формы */
const createErrorPopup = () => {
  createPopup(errorTemplate, true);
}

/** Создание сообщения при ошибке загрузки данных с сервера */
const createDataErrorPopup = (popupText) => {
  const dataErrorPopup = successTemplate.cloneNode(true);
  dataErrorPopup.style.zIndex = 1000;
  const dataErrorText = dataErrorPopup.querySelector('.success__message');
  dataErrorText.textContent = popupText;
  main.appendChild(dataErrorPopup);

  setTimeout(() => {
    dataErrorPopup.remove();
  },DATA_ERROR_SHOW_TIME);
}

export {createDataErrorPopup, createSuccessPopup, createErrorPopup}

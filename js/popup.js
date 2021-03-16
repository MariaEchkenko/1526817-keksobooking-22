/** Функция закрытия сообщений*/
const closeMessage = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      message.remove();
    }
  });

  document.addEventListener('click', () => {
    message.remove();
  });
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');
const DATA_ERROR_SHOW_TIME = 3000;

/** Создание сообщения при ошибке загрузки данных с сервера */
const createDataErrorMessage = (message) => {
  const dataErrorMessage = successTemplate.cloneNode(true);
  dataErrorMessage.style.zIndex = 1000;
  const dataErrorText = dataErrorMessage.querySelector('.success__message');
  dataErrorText.textContent = message;
  main.appendChild(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  },DATA_ERROR_SHOW_TIME);
}

/** Создание сообщения об успешной отправке формы */
const createSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  main.appendChild(successMessage);
  closeMessage(successMessage);
}

/** Создание сообщения об ошибке при отправке формы */
const createErrorMessage = () => {
  const errorMessage = errorTemplate.cloneNode(true);
  const buttonError = errorMessage.querySelector('.error__button');

  main.appendChild(errorMessage);
  closeMessage(errorMessage);

  buttonError.addEventListener('click', () => {
    errorMessage.remove();
  });
}

export {createDataErrorMessage, createSuccessMessage, createErrorMessage}

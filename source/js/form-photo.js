const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const imagePattern = {
  width: 40,
  height: 45,
  alt: 'Фотография жилья',
}

/**
 * Функция создания элемента <img>
 * @returns DOM-элемент <img>
 */
const createImage = () => {
  const image = document.createElement('img');
  image.src = '';
  image.width = imagePattern.width;
  image.height = imagePattern.height;
  image.alt = imagePattern.alt;
  return image;
}

/**
 * Функция отображения превью у изображений
 * @param {*} upload - элемент, на котором происходит выбор изображения
 * @param {*} preview - элемент, в котором отображается превью
 */
const onFileUpload = (upload, preview) => {
  const file = upload.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (!preview.children.length) {
    preview.appendChild(createImage());
  }

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.children[0].src = reader.result;

    });

    reader.readAsDataURL(file);
  }
}

const avatarFileUpload = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview');

avatarFileUpload.addEventListener('change', () => {
  onFileUpload(avatarFileUpload, avatarPreview)
});

const clearAvatar = () => {
  avatarPreview.children[0].src = 'img/muffin-grey.svg';
}

const adPhotoFileUpload = document.querySelector('.ad-form__input');
const adPhotoPreview = document.querySelector('.ad-form__photo');

adPhotoFileUpload.addEventListener('change', () => {
  onFileUpload(adPhotoFileUpload, adPhotoPreview)
});

const clearAdPhoto = () => {
  if (adPhotoPreview.children.length) {
    adPhotoPreview.children[0].remove();
  }
};

export {clearAvatar, clearAdPhoto};




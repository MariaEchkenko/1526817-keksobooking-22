const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const ImagePattern = {
  width: 40,
  height: 45,
  alt: 'Фотография жилья',
}


const createImage = () => {
  const image = document.createElement('img');
  image.src = '';
  image.width = ImagePattern.width;
  image.height = ImagePattern.height;
  image.alt = ImagePattern.alt;
  return image;
}

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
  adPhotoPreview.children[0].remove()
}

export {clearAvatar, clearAdPhoto};




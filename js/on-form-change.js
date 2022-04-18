import { clearForm } from './utils/control-page-state.js';
import { MIN_PRICE_PARAMS } from './utils/data.js';


const ADDRESS = document.querySelector('#address');
const PRICE_INPUT = document.querySelector('#price');
const CLEAR_BUTTON = document.querySelector('.ad-form__reset');
const HOTEL_TYPE_INPUT = document.querySelector('#type');
const TIMEIN = document.querySelector('#timein');
const TIMEOUT = document.querySelector('#timeout');
const AVATAR_FIELD = document.querySelector('.ad-form__field input[type=file]');
const AVATAR_PREVIEW = document.querySelector('.ad-form-header__preview img');
const HOTEL_PHOTO_FIELD = document.querySelector('.ad-form__upload input[type=file]');
const HOTEL_PHOTO_PREVIEW = document.querySelector('.ad-form__photo');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const PRICE_SLIDER = document.querySelector('.ad-form__slider');
noUiSlider.create(PRICE_SLIDER, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
  connect: 'lower'
});

PRICE_SLIDER.noUiSlider.on('update', () => {
  PRICE_INPUT.value = (+PRICE_SLIDER.noUiSlider.get()).toFixed(0);
});

PRICE_INPUT.addEventListener('change', () => {
  PRICE_SLIDER.noUiSlider.set(PRICE_INPUT.value);
});

ADDRESS.value = '35.6895, 139.6917';


HOTEL_TYPE_INPUT.addEventListener('change', () => {
  PRICE_INPUT.value = MIN_PRICE_PARAMS[HOTEL_TYPE_INPUT.value];
  PRICE_INPUT.setAttribute('min', MIN_PRICE_PARAMS[HOTEL_TYPE_INPUT.value]);
});

TIMEIN.addEventListener('change', () => {
  TIMEOUT.value = TIMEIN.value;
});

TIMEOUT.addEventListener('change', () => {
  TIMEIN.value = TIMEOUT.value;
});

CLEAR_BUTTON.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});

AVATAR_FIELD.addEventListener('change', () => {
  const FILE = AVATAR_FIELD.files[0];
  const FILENAME = FILE.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => FILENAME.endsWith(it));

  if (matches) {
    AVATAR_PREVIEW.src = URL.createObjectURL(FILE);
  }
});
HOTEL_PHOTO_FIELD.addEventListener('change', () => {
  const FILE = HOTEL_PHOTO_FIELD.files[0];

  const FILENAME = FILE.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => FILENAME.endsWith(it));

  if (matches) {
    HOTEL_PHOTO_PREVIEW.style.backgroundImage = `url("${URL.createObjectURL(FILE)}")`;
    HOTEL_PHOTO_PREVIEW.style.backgroundSize = 'cover';
  }
});

export {PRICE_SLIDER, AVATAR_PREVIEW, HOTEL_PHOTO_PREVIEW, AVATAR_FIELD, HOTEL_PHOTO_FIELD};

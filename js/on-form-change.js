import { loadData } from './server-api.js';
import { clearForm } from './utils/control-page-state.js';
import { MIN_PRICE_PARAMS } from './utils/data.js';
import { DEFAULT_ADDRESS_VALUE } from './utils/data.js';


const address = document.querySelector('#address');
const priceInput = document.querySelector('#price');
const clearButton = document.querySelector('.ad-form__reset');
const hotelTypeInput = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const avatarField = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const hotelPhotoField = document.querySelector('.ad-form__upload input[type=file]');
const hotelPhotoPreview = document.querySelector('.ad-form__photo');
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
  priceInput.value = (+PRICE_SLIDER.noUiSlider.get()).toFixed(0);
});

priceInput.addEventListener('change', () => {
  PRICE_SLIDER.noUiSlider.set(priceInput.value);
});

address.value = DEFAULT_ADDRESS_VALUE;


hotelTypeInput.addEventListener('change', () => {
  priceInput.value = MIN_PRICE_PARAMS[hotelTypeInput.value];
  priceInput.setAttribute('min', MIN_PRICE_PARAMS[hotelTypeInput.value]);
});

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

clearButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
  loadData();
});

avatarField.addEventListener('change', () => {
  const FILE = avatarField.files[0];
  const FILENAME = FILE.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => FILENAME.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(FILE);
  }
});
hotelPhotoField.addEventListener('change', () => {
  const FILE = hotelPhotoField.files[0];

  const FILENAME = FILE.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => FILENAME.endsWith(it));

  if (matches) {
    hotelPhotoPreview.style.backgroundImage = `url("${URL.createObjectURL(FILE)}")`;
    hotelPhotoPreview.style.backgroundSize = 'cover';
  }
});

export {PRICE_SLIDER, avatarPreview, hotelPhotoPreview, avatarField, hotelPhotoField};

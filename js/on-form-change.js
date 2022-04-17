import { MAIN_MARKER } from './map.js';
import { clearForm } from './utils/control-page-state.js';
import { MIN_PRICE_PARAMS } from './utils/data.js';
import { OFFER_FORM } from './form-validation.js';

const ADDRESS = document.querySelector('#address');
const PRICE_INPUT = OFFER_FORM.querySelector('#price');
const CLEAR_BUTTON = document.querySelector('.ad-form__reset');
const HOTEL_TYPE_INPUT = document.querySelector('#type');
const TIMEIN = document.querySelector('#timein');
const TIMEOUT = document.querySelector('#timeout');

const PRICE_SLIDER = OFFER_FORM.querySelector('.ad-form__slider');
noUiSlider.create(PRICE_SLIDER, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
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

MAIN_MARKER.on('drag', () => {
  ADDRESS.value = String(MAIN_MARKER.getLatLng()).replace(/[a-z()]/gi, '');
});

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

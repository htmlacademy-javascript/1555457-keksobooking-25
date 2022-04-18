import { MAIN_MARKER } from '../map.js';
import { PRICE_SLIDER, HOTEL_PHOTO_PREVIEW, AVATAR_PREVIEW, AVATAR_FIELD, HOTEL_PHOTO_FIELD } from '../on-form-change.js';

const FORM = document.querySelector('.ad-form');
const FIELDS = FORM.querySelectorAll('fieldset');


const FORM_AVATAR = FORM.querySelector('#avatar');
const FORM_OFFER_TITLE = FORM.querySelector('#title');
const FORM_ADDRESS = FORM.querySelector('#address');
const FORM_OFFER_TYPE = FORM.querySelector('#type');
const FORM_OFFER_PRICE = FORM.querySelector('#price');
const FORM_TIMEIN = FORM.querySelector('#timein');
const FORM_TIMEOUT = FORM.querySelector('#timeout');
const FORM_ROOM_NUMBER = FORM.querySelector('#room_number');
const FORM_CAPACITY = FORM.querySelector('#capacity');
const FORM_FEEATURE_CHECKBOXES = FORM.querySelectorAll('input[type="checkbox"][name="feature"]');
const FORM_DESCRIPTION = FORM.querySelector('#description');
const MAP_FILTERS_CONTAINER = document.querySelector('.map__filters');
const MAP_FILTERS = Array.from(MAP_FILTERS_CONTAINER.children);

function enableForm () {
  FORM.classList.remove('.ad-form--disabled');
  FIELDS.forEach((element) => element.removeAttribute('disabled'));
  MAP_FILTERS_CONTAINER.classList.remove('map__filters--disabled');
  MAP_FILTERS.forEach((filter) => {
    filter.removeAttribute('disabled');
  });
  PRICE_SLIDER.removeAttribute('disabled');
}
function disableForm () {
  FORM.classList.add('.ad-form--disabled');
  FIELDS.forEach((element) => element.setAttribute('disabled', ''));
  MAP_FILTERS_CONTAINER.classList.add('map__filters--disabled');
  MAP_FILTERS.forEach((filter) => {
    filter.setAttribute('disabled', '');
  });
  PRICE_SLIDER.setAttribute('disabled', '');
}
function clearForm () {
  FORM_AVATAR.value = '';
  FORM_OFFER_TITLE.value = '';
  FORM_ADDRESS.value = '35.6895, 139.6917';
  FORM_OFFER_TYPE.value = 'flat';
  FORM_OFFER_PRICE.value = 1000;
  FORM_TIMEIN.value = '12:00';
  FORM_TIMEOUT.value = '12:00';
  FORM_ROOM_NUMBER.value = 1;
  FORM_CAPACITY.value = 3;
  FORM_FEEATURE_CHECKBOXES.forEach((checkbox) => {
    checkbox.checked = false;
  });
  FORM_DESCRIPTION.value = '';
  MAIN_MARKER.setLatLng({
    lat: 35.6895,
    lng: 139.6917
  });
  AVATAR_PREVIEW.src = 'img/muffin-grey.svg';
  AVATAR_FIELD.value = '';
  HOTEL_PHOTO_PREVIEW.style.backgroundImage = '';
  HOTEL_PHOTO_FIELD.value = '';
}

export { enableForm, disableForm, clearForm };

import { MAIN_MARKER } from './map.js';

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
const MAP_FILTERS = document.querySelector('.map__filters-container');

function enableForm () {
  FORM.removeAttribute('disabled');
  FIELDS.forEach((element) => element.removeAttribute('disabled'));
  MAP_FILTERS.classList.remove('hidden');
}
function disableForm () {
  FORM.setAttribute('disabled');
  FIELDS.forEach((element) => element.setAttribute('disabled'));
  MAP_FILTERS.classList.add('hidden');
}
function clearForm () {
  FORM_AVATAR.value = '';
  FORM_OFFER_TITLE.value = '';
  FORM_ADDRESS.value = '35.6895, 139.6917';
  FORM_OFFER_TYPE.value = 'flat';
  FORM_OFFER_PRICE.value = 5000;
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
}

export { enableForm, disableForm, clearForm };

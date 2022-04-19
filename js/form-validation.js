import {ROOMS_VALIDATION_PARAMS } from './utils/data.js';
import { showFailMessage, showSuccessMessage } from './utils/form-tools.js';
import { sendData } from './server-api.js';
import { resetFilters } from './utils/map-filters.js';

const offerForm = document.querySelector('.ad-form');
const guestsSelect = offerForm.querySelector('#capacity');

const pristine = new Pristine(offerForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

function validateRooms (value) {
  return ROOMS_VALIDATION_PARAMS[value].indexOf(+guestsSelect.value) > -1;
}

pristine.addValidator(offerForm.querySelector('#room_number'), validateRooms, 'Количество комнат не соответствует количеству гостей');

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const FORM_DATA = new FormData(evt.target);
    sendData(showSuccessMessage, showFailMessage, FORM_DATA);
    resetFilters();
  }
});


export { offerForm };

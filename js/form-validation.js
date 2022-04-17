import {ROOMS_VALIDATION_PARAMS } from './utils/data.js';
import { showFailMessage, showSuccessMessage } from './utils/form-tools.js';
import { sendData } from './server-api.js';

const OFFER_FORM = document.querySelector('.ad-form');
const GUESTS_SELECT = OFFER_FORM.querySelector('#capacity');

const pristine = new Pristine(OFFER_FORM, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

function validateRooms (value) {
  return ROOMS_VALIDATION_PARAMS[value].indexOf(+GUESTS_SELECT.value) > -1;
}

pristine.addValidator(OFFER_FORM.querySelector('#room_number'), validateRooms, 'Количество комнат не соответствует количеству гостей');

OFFER_FORM.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const FORM_DATA = new FormData(evt.target);
    sendData(showSuccessMessage, showFailMessage, FORM_DATA);
  }
});


export { OFFER_FORM };

import {ROOMS_VALIDATION_PARAMS} from './data.js';
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
    OFFER_FORM.submit();
  }
});


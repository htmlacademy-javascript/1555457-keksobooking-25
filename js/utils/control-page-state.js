import { MAIN_MARKER } from '../map.js';
import { PRICE_SLIDER, hotelPhotoPreview, avatarPreview,avatarField, hotelPhotoField } from '../on-form-change.js';
import { resetFilters } from './map-filters.js';

const form = document.querySelector('.ad-form');
const fields = form.querySelectorAll('fieldset');

const formAvatar = form.querySelector('#avatar');
const formOfferTitle = form.querySelector('#title');
const formAddress = form.querySelector('#address');
const formOfferType = form.querySelector('#type');
const formOfferPrice = form.querySelector('#price');
const formTimein = form.querySelector('#timein');
const formTimeout = form.querySelector('#timeout');
const formRoomNumber = form.querySelector('#room_number');
const formCapacity = form.querySelector('#capacity');
const formFeatureCheckboxes = form.querySelectorAll('input[type="checkbox"][name="feature"]');
const formDescription = form.querySelector('#description');
const mapFiltersContainer = document.querySelector('.map__filters');
const mapFilters = Array.from(mapFiltersContainer.children);

function enableForm () {
  form.classList.remove('.ad-form--disabled');
  fields.forEach((element) => element.removeAttribute('disabled'));
  mapFiltersContainer.classList.remove('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.removeAttribute('disabled');
  });
  PRICE_SLIDER.removeAttribute('disabled');
}
function disableForm () {
  form.classList.add('.ad-form--disabled');
  fields.forEach((element) => element.setAttribute('disabled', ''));
  mapFiltersContainer.classList.add('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.setAttribute('disabled', '');
  });
  PRICE_SLIDER.setAttribute('disabled', '');
}
function clearForm () {
  formAvatar.value = '';
  formOfferTitle.value = '';
  formAddress.value = '35.6895, 139.6917';
  formOfferType.value = 'flat';
  formOfferPrice.value = 1000;
  formTimein.value = '12:00';
  formTimeout.value = '12:00';
  formRoomNumber.value = 1;
  formCapacity.value = 3;
  formFeatureCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  formDescription.value = '';
  MAIN_MARKER.setLatLng({
    lat: 35.6895,
    lng: 139.6917
  });
  avatarPreview.src = 'img/muffin-grey.svg';
  avatarField.value = '';
  hotelPhotoPreview.style.backgroundImage = '';
  hotelPhotoField.value = '';
  resetFilters();
}

export { enableForm, disableForm, clearForm };

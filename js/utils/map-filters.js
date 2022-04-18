const FILTERS_FORM  = document.querySelector('.map__filters');
const FILTER_TYPE = FILTERS_FORM.querySelector('#housing-type');
const FILTER_PRICE = FILTERS_FORM.querySelector('#housing-price');
const FILTER_ROOMS = FILTERS_FORM.querySelector('#housing-rooms');
const FILTER_GUESTS = FILTERS_FORM.querySelector('#housing-guests');
const FILTER_FEATURES = FILTERS_FORM.querySelector('#housing-features');
const FILTER_FEATURES_CHECKBOXES = Array.from(FILTER_FEATURES.querySelectorAll('input'));

function getFiltersState() {
  const temp = {};
  temp.features = [];
  if (FILTER_TYPE.value !== 'any') {
    temp.type = FILTER_TYPE.value;
  }

  switch (FILTER_PRICE.value) {
    case 'low':
      temp.price = [0, 9999];
      break;
    case 'middle':
      temp.price = [10000, 49999];
      break;
    case 'high':
      temp.price = [50000, Infinity];
      break;
  }

  if (FILTER_ROOMS.value !== 'any') {
    temp.rooms = FILTER_ROOMS.value;
  }

  if (FILTER_GUESTS.value !== 'any') {
    temp.guests = FILTER_GUESTS.value;
  }

  FILTER_FEATURES_CHECKBOXES.forEach((element) => {
    if (element.checked) {
      temp.features.push(element.value);
    }
  });
  return temp;
}

function checkFeatures(filter, features) {
  if (!features) {
    features = [];
  }
  if (!filter) {
    return true;
  }
  if (filter.every((feature) => features.indexOf(feature) > -1)) {
    return true;
  }
  return false;
}

function checkHotelData (element) {
  const FILTERS = getFiltersState();
  let counter = 0;
  if (!FILTERS.type || FILTERS.type === element.offer.type) {
    counter++;
  }
  if (!FILTERS.price || FILTERS.price[0] <= element.offer.price && FILTERS.price[1] >= element.offer.price) {
    counter++;
  }
  if (!FILTERS.guests || +FILTERS.guests === +element.offer.guests) {
    counter++;
  }
  if (!FILTERS.rooms || +FILTERS.rooms === +element.offer.rooms) {
    counter++;
  }
  if (checkFeatures(FILTERS.features, element.offer.features)) {
    counter++;
  }
  return counter === 5;
}
function resetFilters () {
  FILTER_TYPE.value = 'any';
  FILTER_PRICE.value = 'any';
  FILTER_GUESTS.value = 'any';
  FILTER_ROOMS.value = 'any';
  FILTER_FEATURES_CHECKBOXES.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

export { checkHotelData, FILTERS_FORM, resetFilters };

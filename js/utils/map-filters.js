const filtersForm  = document.querySelector('.map__filters');
const filterType = filtersForm.querySelector('#housing-type');
const filterPrice = filtersForm.querySelector('#housing-price');
const filterRooms = filtersForm.querySelector('#housing-rooms');
const filterGuests = filtersForm.querySelector('#housing-guests');
const filterFeatures = filtersForm.querySelector('#housing-features');
const filterFeaturesCheckboxes = Array.from(filterFeatures.querySelectorAll('input'));

function getFiltersState() {
  const temp = {};
  temp.features = [];
  if (filterType.value !== 'any') {
    temp.type = filterType.value;
  }

  switch (filterPrice.value) {
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

  if (filterRooms.value !== 'any') {
    temp.rooms = filterRooms.value;
  }

  if (filterGuests.value !== 'any') {
    temp.guests = filterGuests.value;
  }

  filterFeaturesCheckboxes.forEach((element) => {
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
  return filter.every((feature) => features.indexOf(feature) > -1)
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
  filterType.value = 'any';
  filterPrice.value = 'any';
  filterGuests.value = 'any';
  filterRooms.value = 'any';
  filterFeaturesCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

export { checkHotelData, filtersForm, resetFilters };

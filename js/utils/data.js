const HOTEL_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const HOTEL_TYPES_TRANSLATIONS = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель'
];
const ROOMS_VALIDATION_PARAMS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0]
};
const MIN_PRICE_PARAMS = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const DEFAULT_ADDRESS_VALUE = '35.6895, 139.6917';
const DEFAULT_LAT = '35.6895';
const DEFAULT_LNG = '139.6917';
const DEFAULT_TIMING = 500;
export { HOTEL_TYPES, HOTEL_TYPES_TRANSLATIONS, ROOMS_VALIDATION_PARAMS, MIN_PRICE_PARAMS, DEFAULT_ADDRESS_VALUE, DEFAULT_LAT, DEFAULT_LNG, DEFAULT_TIMING };

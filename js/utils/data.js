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
export { HOTEL_TYPES, HOTEL_TYPES_TRANSLATIONS as HOTEL_TYPES_TRANSLATION, ROOMS_VALIDATION_PARAMS, MIN_PRICE_PARAMS };

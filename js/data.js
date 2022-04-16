const HOTEL_TITLES = [
  'Шикарный апарт-отель',
  'Дом в Геленджике',
  'Уютный номер с видом на море',
  'Hotel Komo',
  'Номер на двоих',
  'Однокомнатная квартира в центре',
  'Уютный номер с видом на море',
  'Номер в горах',
  'Номер на двоих',
  'Номер на двоих'
];
const HOTEL_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const HOTEL_TYPES_TRANSLATION = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель'
];
const CHECKIN_OPTIONS = [
  '12:00',
  '13:00',
  '14:00'
];
const HOTEL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const HOTEL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
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
export {HOTEL_TITLES, HOTEL_TYPES, HOTEL_TYPES_TRANSLATION, CHECKIN_OPTIONS, HOTEL_FEATURES, HOTEL_PHOTOS, ROOMS_VALIDATION_PARAMS, MIN_PRICE_PARAMS};

function getRandomNumber (min, max) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min < 0 || max < 0) {
    return null;
  }
  min = Math.floor(min);
  max = Math.ceil(max);

  return Math.round(Math.random() * (max - min)) + min;
}
function getRandomFloat (min, max, digits) {
  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  if (min < 0 || max < 0) {
    return null;
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
}
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

function createLandingArray () {
  const landingArray = [];
  for (let i = 1; i <= 10; i++) {
    const temp = new Object;

    temp.author = new Object;
    temp.offer = new Object;
    temp.location = new Object;

    temp.author.avatar = i < 10 ? `img/avatars/user0${i}.png` : `img/avatars/user${i}.png`;

    temp.location.lat = +getRandomFloat(35.65000, 35.70000, 5);
    temp.location.lng = +getRandomFloat(139.70000, 139.80000, 5);

    temp.offer.address = `${temp.location.lat}, ${temp.location.lng}`;
    temp.offer.title = HOTEL_TITLES[i-1];
    temp.offer.price = getRandomNumber(2000, 15000);
    temp.offer.type = HOTEL_TYPES[getRandomNumber(0, HOTEL_TYPES.length - 1)];
    temp.offer.rooms = getRandomNumber(1, 5);
    temp.offer.guests = getRandomNumber(1, 15);
    temp.offer.checkin = CHECKIN_OPTIONS[getRandomNumber(0, CHECKIN_OPTIONS.length - 1)];
    temp.offer.checkout = CHECKIN_OPTIONS[getRandomNumber(0, CHECKIN_OPTIONS.length - 1)];
    temp.offer.features = getRandomElements(HOTEL_FEATURES);
    temp.offer.description = 'Отель сочетает в себе уют домашнего очага и комфорт современной обстановки. Все номера выходят окнами на тихий закрытый двор, оснащены стеклопакетами и кондиционерами, имеют отдельную туалетную комнату с душевой кабиной и феном.';
    temp.offer.photos = getRandomElements(HOTEL_PHOTOS);

    landingArray.push(temp);
  }

  function getRandomElements (array) {
    const elementsNumber = getRandomNumber(1, array.length - 1);
    const tempArray = [];
    for (let i = 0; i < elementsNumber; i++) {
      tempArray.push(array[getRandomNumber(1, array.length - 1)]);
    }
    return tempArray;
  }

  return landingArray;
}

getRandomFloat();
getRandomNumber();
createLandingArray();


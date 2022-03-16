import { getRandomNumber, getRandomFloat } from './random-numbers.js';
import {HOTEL_TITLES, HOTEL_TYPES, CHECKIN_OPTIONS, HOTEL_FEATURES, HOTEL_PHOTOS} from './data.js';


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
    temp.offer.title =HOTEL_TITLES[getRandomNumber(0, HOTEL_TITLES.length - 1)];
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
    const elementsNumber = getRandomNumber(1, array.length);
    const tempArray = [];

    while (tempArray.length < elementsNumber) {
      const currentEl = array[getRandomNumber(0, array.length - 1)];
      if (tempArray.indexOf(currentEl) === -1)
      {tempArray.push(currentEl);}
    }
    return tempArray;
  }

  return landingArray;
}

export  {createLandingArray} ;

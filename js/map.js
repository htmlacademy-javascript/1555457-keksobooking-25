import { generateOffer } from './generate-offer.js';
import { createLandingArray } from './create-landing-array.js';
import { enableForm } from './control-page-state.js';

const landingArray = createLandingArray();

const MAP = L.map('map-canvas');

MAP.on('load', enableForm);

MAP.setView({
  lat: 35.6895,
  lng: 139.6917
}, 12);

const MAIN_PIN_ICON = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const PIN_ICON = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const MAIN_MARKER = L.marker({
  lat: 35.6895,
  lng: 139.6917
}, {
  draggable: true,
  icon: MAIN_PIN_ICON
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(MAP);

MAIN_MARKER.addTo(MAP);

landingArray.forEach((element) => {
  const MARKER = L.marker(
    {
      lat: element.location.lat,
      lng: element.location.lng,
    },
    {
      icon: PIN_ICON,
    },
  );
  MARKER.addTo(MAP);

  MARKER.on('click', (evt) => {
    const POPUP = L.popup().setContent(generateOffer(element));
    evt.target
      .unbindPopup()
      .bindPopup(POPUP)
      .openPopup();
  });
});


export { MAIN_MARKER };

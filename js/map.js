import { generateOffer } from './utils/generate-offer.js';
import { enableForm } from './utils/control-page-state.js';
import { loadData } from './server-api.js';
import { checkHotelData, FILTERS_FORM } from './utils/map-filters.js';
import { debounce } from './utils/form-tools.js';


const MAP = L.map('map-canvas');

MAP.on('load', () => {
  enableForm();
  loadData();
});

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
const MARKERS = L.layerGroup().addTo(MAP);

function renderMarkers (hotels) {
  hotels = hotels.filter((hotel) => checkHotelData(hotel));
  MARKERS.clearLayers();
  hotels.slice(0, 10).forEach((element) => {
    const MARKER = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: PIN_ICON,
      },
    );
    MARKER.addTo(MARKERS);

    MARKER.on('click', (evt) => {
      const POPUP = L.popup().setContent(generateOffer(element));
      evt.target
        .unbindPopup()
        .bindPopup(POPUP)
        .openPopup();
    });
  });
}

function showErrorMessage (errorMessage) {
  const errorBlock = document.createElement('div');
  const mapCanvas = document.querySelector('.map');

  errorBlock.style.position = 'absolute';
  errorBlock.style.zIndex = 1000;
  errorBlock.style.width = '300px';
  errorBlock.style.height = '50px';
  errorBlock.style.marginLeft = 'calc(50% - 150px)';
  errorBlock.style.marginRight = 'calc(50% - 150px)';
  errorBlock.style.backgroundColor = '#f0f0ea';
  errorBlock.style.color = 'red';

  errorBlock.innerHTML = `<p style="text-align: center;">${errorMessage}</p>`;
  mapCanvas.appendChild(errorBlock);
}
FILTERS_FORM.addEventListener('change', () => {
  debounce(loadData());
});
export { MAIN_MARKER, renderMarkers, showErrorMessage };

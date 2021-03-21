/* global L:readonly */

const map = L.map('map-canvas')
  .on('load', () => {
    
    console.log('Карта инициализирована')
  })
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);




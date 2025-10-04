const myDOMElement = document.getElementById('globe-container');

const dayTexture = 'day_texture.png';
const nightTexture = 'night_texture.png';

const myData = [
  { lat: 48.8575, lng: 2.3514, size: 0.8, color: 'red' }, //paris
  { lat: 30.0444, lng: 31.2357, size: 0.8, color: 'blue' }, //cairo
  { lat: 19.4326, lng: -99.1332, size: 0.8, color: 'green' } //mexico city
];

const myGlobe = Globe()(myDOMElement)
  .globeImageUrl(dayTexture)
  .pointsData(myData);

let isDay = true;
document.getElementById('toggle').addEventListener('click', () => {
  isDay = !isDay;
  myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
});
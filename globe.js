const myDOMElement = document.getElementById('globe-container');

const dayTexture = 'day_texture.png';
const nightTexture = 'night_texture.png';

const myData = [
    { lat: 48.8575, lng: 2.3514, size: 1, color: 'red' }, //paris
    { lat: 30.0444, lng: 31.2357, size: 1, color: 'blue' }, //cairo
    { lat: 19.4326, lng: -99.1332, size: 1, color: 'green' }, //mexico city
    { lat: 35.6764, lng: 139.6500, size: 1, color: 'orange' }, //tokyo
    { lat: -22.9068, lng: -43.1729, size: 1, color: 'yellow' }, //rio de janeiro
    { lat: -42.70, lng: 172.217, size: 1, color: 'purple' }, //lake sumner forest
    { lat: -71.9499, lng: 23.3470, size: 1, color: 'pink' }, //princess elisabeth
    { lat: -48.526, lng: -123.236, size: 1, color: 'cyan' } //point nemo
];

const myGlobe = Globe()(myDOMElement)
  .globeImageUrl(dayTexture)
  .pointsData(myData);

let isDay = true;
document.getElementById('toggle').addEventListener('click', () => {
  isDay = !isDay;
  myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
});
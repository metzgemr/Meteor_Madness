const myDOMElement = document.getElementById('globe-container');

const dayTexture = 'day_texture.png';
const nightTexture = 'night_texture.png';

let hoverD = null;
let labelData = []; // FIX: Declare the labelsData array here

const myData = [
    { lat: 48.8575, lng: 2.3514, size: 1, color: 'red', label:'Paris'}, //paris
    { lat: 30.0444, lng: 31.2357, size: 1, color: 'blue', label:'Cairo' }, //cairo
    { lat: 19.4326, lng: -99.1332, size: 1, color: 'green', label:'Mexico City' }, //mexico city
    { lat: 35.6764, lng: 139.6500, size: 1, color: 'orange', label:'Tokyo' }, //tokyo
    { lat: -22.9068, lng: -43.1729, size: 1, color: 'yellow', label:'Rio de Janeiro' }, //rio de janeiro
    { lat: -42.70, lng: 172.217, size: 1, color: 'purple', label:'Lake Sumner Forest' }, //lake sumner forest
    { lat: -71.9499, lng: 23.3470, size: 1, color: 'pink', label:'Princess Elisabeth' }, //princess elisabeth
    { lat: -48.526, lng: -123.236, size: 1, color: 'cyan', label:'Point Nemo' } //point nemo
];

const myGlobe = Globe()(myDOMElement)
    .globeImageUrl(dayTexture)
    .pointsData(myData)
    .pointColor('color')
    .pointRadius(d => d === hoverD ? 1.5 : 0.5)
    .labelsData(labelData) // FIX: Add labelsData initially
    .labelAltitude(0.02)
    .labelText('text')
    .labelSize(0.5)
    .labelColor(() => 'yellow')
    .onPointHover(d => {
        hoverD = d;
        myGlobe.pointsData(myData).labelsData(labelData);
    });

let isDay = true;
document.getElementById('toggle').addEventListener('click', () => {
    isDay = !isDay;
    myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
    myGlobe.pointsData(myData);
});

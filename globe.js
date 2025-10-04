const myDOMElement = document.getElementById('globe-container');

const dayTexture = 'day_texture.png';
const nightTexture = 'night_texture.png';

let hoverD = null;

const myData = [
    { lat: 48.8575, lng: 2.3514, size: 1, color: 'red', label:'Paris', 'target': "/paris.html"},
    { lat: 30.0444, lng: 31.2357, size: 1, color: 'blue', label:'Cairo', 'target': "/cairo.html" },
    { lat: 19.4326, lng: -99.1332, size: 1, color: 'green', label:'Mexico City', 'target': "/mexicocity.html" },
    { lat: 35.6764, lng: 139.6500, size: 1, color: 'orange', label:'Tokyo', 'target': "/tokyo.html" },
    { lat: -22.9068, lng: -43.1729, size: 1, color: 'yellow', label:'Rio de Janeiro', 'target': "/rio.html" },
    { lat: -42.70, lng: 172.217, size: 1, color: 'purple', label:'Lake Sumner Forest', 'target': "/sumner.html" },
    { lat: -71.9499, lng: 23.3470, size: 1, color: 'pink', label:'Princess Elisabeth', 'target': "/elisabeth.html" },
    { lat: -48.526, lng: -123.236, size: 1, color: 'cyan', label:'Point Nemo', 'target': "/nemo.html" }
];

const labelData = myData.map(d => ({
    lat: d.lat,
    lng: d.lng,
    text: d.label
}));

const myGlobe = Globe()(myDOMElement)
    .globeImageUrl(dayTexture)
    .pointsData(myData)
    .pointColor('color')
    .pointRadius(d => d === hoverD ? 1.5 : 0.5)
    .labelsData(labelData)
    .labelAltitude(0.1)
    .labelText('text')
    .labelSize(3)
    .labelColor(d => (myData.find(p => p.label === d.text) === hoverD ? 'white' : 'yellow'))
    .onPointClick(d => {
        window.location.href = d.target;
    })
    .onPointHover(d => {
        hoverD = d;
        myGlobe.pointsData(myData).labelsData(labelData);
    });

let isDay = true;
let toggleButton = document.getElementById('toggle')
toggleButton.addEventListener('click', () => {
    isDay = !isDay;
    myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
    myGlobe.pointsData(myData);
});

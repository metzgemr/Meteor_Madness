console.log("Globe JS loaded");

const myDOMElement = document.getElementById('globe-container');

const dayTexture = '../images/day_texture.png';
const nightTexture = '../images/night_texture.png';

let hoverD = null;

const myData = [
    { lat: 48.8575, lng: 2.3514, size: 1, color: 'red', label: 'Paris', target: "/locations/paris.html" },
    { lat: 30.0444, lng: 31.2357, size: 1, color: 'blue', label: 'Cairo', target: "/locations/cairo.html" },
    { lat: 19.4326, lng: -99.1332, size: 1, color: 'green', label: 'Mexico City', target: "/locations/mexicocity.html" },
    { lat: 35.6764, lng: 139.6500, size: 1, color: 'orange', label: 'Tokyo', target: "/locations/tokyo.html" },
    { lat: -22.9068, lng: -43.1729, size: 1, color: 'yellow', label: 'Rio de Janeiro', target: "/locations/rio.html" },
    { lat: -42.70, lng: 172.217, size: 1, color: 'purple', label: 'Lake Sumner Forest', target: "/locations/sumner.html" },
    { lat: -71.9499, lng: 23.3470, size: 1, color: 'pink', label: 'Princess Elisabeth', target: "/locations/elisabeth.html" },
    { lat: -48.526, lng: -123.236, size: 1, color: 'cyan', label: 'Point Nemo', target: "/locations/nemo.html" }
];

// separate labels for display
const labelData = myData.map(d => ({
    lat: d.lat,
    lng: d.lng,
    text: d.label
}));

const myGlobe = Globe()(myDOMElement)
    .globeImageUrl(dayTexture)
    .pointsData(myData)
    .pointColor(d => (d === hoverD ? 'white' : d.color))
    .pointAltitude(0.02)
    .pointRadius(2)
    .labelColor(d => (myData.find(p => p.label === d.text) === hoverD ? 'white' : 'yellow'))
    .pointLabel(d => `<div style="padding:4px;"><b>${d.label}</b></div>`)
    .onPointClick(d => {
        window.location.href = d.target;
    })
    .onPointHover(d => {
        hoverD = d;
        myGlobe
            .pointColor(d => (d === hoverD ? 'white' : d.color));
    });
let isDay = true;
let toggleButton = document.getElementById('toggle')
toggleButton.addEventListener('click', () => {
    isDay = !isDay;
    myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
    myGlobe.pointsData(myData);
});

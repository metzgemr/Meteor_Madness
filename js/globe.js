/*Generated with the help of AI (ChatGPT) - troubleshooting*/

console.log("Globe JS loaded");

const myDOMElement = document.getElementById('globe-container');

const dayTexture = '../images/textures/day_texture.png';
const nightTexture = '../images/textures/night_texture.png';

let hoverD = null;
let isDay = true;

const myData = [
    { lat: 48.8575, lng: 2.3514, size: 1, color: '#FF5C5C', label: 'Paris', target: "/locations/paris.php" },
    { lat: 30.0444, lng: 31.2357, size: 1, color: '#89CFF0', label: 'Cairo', target: "/locations/cairo.php" },
    { lat: 19.4326, lng: -99.1332, size: 1, color: '#50C878', label: 'Mexico City', target: "/locations/mexicocity.php" },
    { lat: 35.6764, lng: 139.6500, size: 1, color: 'orange', label: 'Tokyo', target: "/locations/tokyo.php" },
    { lat: -22.9068, lng: -43.1729, size: 1, color: 'yellow', label: 'Rio de Janeiro', target: "/locations/rio.php" },
    { lat: -42.70, lng: 172.217, size: 1, color: '#D1B9FF', label: 'Lake Sumner Forest', target: "/locations/sumner.php" },
    { lat: -71.9499, lng: 23.3470, size: 1, color: 'pink', label: 'Princess Elisabeth', target: "/locations/elisabeth.php" },
    { lat: -48.526, lng: -123.236, size: 1, color: 'cyan', label: 'Point Nemo', target: "/locations/nemo.php" }
];

function findPoint(targetPoint) {
    const regex = /\/([^/.]+)\.php$/;

    return myData.find(point => {
        const match = point.target.match(regex);
        return match && match[1] === targetPoint;
    });
}

const myGlobe = Globe()(myDOMElement)
    .globeImageUrl(dayTexture)
    .pointsData(myData)
    .pointColor(d => (d === hoverD ? 'white' : d.color))
    .pointAltitude(0.02)
    .pointRadius(2)
    .labelColor(d => (myData.find(p => p.label === d.text) === hoverD ? 'white' : 'yellow'))
    .pointLabel(d => `<div style="padding:4px;"><b>${d.label}</b></div>`)
    .onPointClick(d => {
        window.location.href = d.target + (isDay ? "?tod=d" : "?tod=n");
    })
    .onPointHover(d => {
        hoverD = d;
        myGlobe
            .pointColor(d => (d === hoverD ? 'white' : d.color));
    });

// Day Night Logic

let toggleButton = document.getElementById('toggle')
toggleButton.addEventListener('click', () => {
    isDay = !isDay;
    myGlobe.globeImageUrl(isDay ? dayTexture : nightTexture);
    document.getElementById("toggle-img").src = isDay ? "../images/day_night_icon.png" : "../images/night_day_icon.png";
    myGlobe.pointsData(myData);
});

// Ham key logix

let keyOpen = false

const list = document.getElementById('key-list');
if(list) {
    myData.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point.label;
        li.style.color = point.color;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            myGlobe.pointOfView({
                lat: point.lat,
                lng: point.lng,
                altitude: 0.5
            }, 1000); // The second argument (1000ms) is the transition duration for animation
        })
        list.appendChild(li);
    });

    let toggleKeyButton = document.getElementById('key-toggle')
    let keyBox = document.getElementById('key-wrapper');
    toggleKeyButton.addEventListener('click', () => {
        keyOpen = !keyOpen;
        keyBox.style.opacity = keyOpen ? '1' : '0';
        keyBox.style.visibility = keyOpen ? 'visible' : 'hidden';

    });
}





console.log("Started results")

const urlParams = new URLSearchParams(window.location.search);
const params = {
    loc: urlParams.get('loc'),
    tod: urlParams.get('tod'),
    r: urlParams.get('r'),
    a: urlParams.get('a'),
    d: urlParams.get('d'),
    v: urlParams.get('v')
};
const pointObj = findPoint(params.loc);






const simulation = meteorCalculation(params.v, params.r, params.a, params.d);
console.info(simulation)


//dsjkfhsjhslkhljkshjhflfhsdljhfjksd
// the stuff on the rings

// Zoom to place
if(pointObj) {
    myGlobe.pointsData([pointObj]);
    myGlobe.pointRadius(0.01)
    myGlobe.pointOfView({
        lat: pointObj.lat,
        lng: pointObj.lng,
        altitude: 0.05
    }, 1500);
}

// Set rings
const ringsData = myData.map(p => ({
    lat: p.lat,
    lng: p.lng,
    color: p.color,
    maxR: 1,
    propagationSpeed: 0.5,
    lastRingTime: 0
}));

const ringSpacing = 3000;

function updateRings() {
    const now = Date.now();

    ringsData.forEach(p => {
        if (now - p.lastRingTime > ringSpacing) {
            myGlobe
                .ringsData([
                    { lat: pointObj.lat, lng: pointObj.lng, color: 'red', maxR: simulation. crater_angular_radius}
                ])
                .ringColor(d => d.color)
                .ringMaxRadius(d => d.maxR)
                .ringPropagationSpeed(d => d.propagationSpeed ?? 0.2) // units per second
                .ringRepeatPeriod(1000);

            p.lastRingTime = now;
        }
    });


}

updateRings();

//// LKFJDSLFHSFJLKFJSLFJHDFHSLF
// Set some simulation stuff and valuses
function formatScientific(num, digits = 3) {
    if (num === 0) return "0"; // handle zero separately

    const expStr = num.toExponential(digits); // e.g., "-2.500e+3" or "2.500e-3"
    const [mantissa, exp] = expStr.split('e');

    const exponent = exp.startsWith('+') ? exp.slice(1) : exp; // keep negative sign if present
    return `${mantissa} × 10^${exponent}`;
}
function formatMeasurementSpans(className, num) {
    document.querySelectorAll(`span.${className}`).forEach(span => {
        if (!isNaN(num)) {
            span.textContent = formatScientific(num);
            span.title = num; // exact value on hover
        }
    });
}


const currentLocationHeader = document.getElementById("current-location")
currentLocationHeader.innerText = pointObj.label;

async function fetchFirstRingPopulation(latitude, longitude, distance_km) {
    const url = `https://ringpopulationsapi.azurewebsites.net/api/globalringpopulations?latitude=${latitude}&longitude=${longitude}&distance_km=${distance_km}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data[0] || null; // Return the first item or null if the array is empty
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}




formatMeasurementSpans("output-mass", simulation.mass, "")
formatMeasurementSpans("output-energy", simulation.energy, "")
formatMeasurementSpans("output-crater", simulation.crater, "")
formatMeasurementSpans("output-wave", simulation.wave, "")
formatMeasurementSpans("output-crater-area", simulation.crater_area, "")
formatMeasurementSpans("output-wave-area", simulation.wave_area, "")



fetchFirstRingPopulation(pointObj.lat.toFixed(3), pointObj.lng.toFixed(3), simulation.crater.toFixed(0))
    .then(firstPopulation => {
        if (firstPopulation) {
            console.log('First ring population data:', firstPopulation);
            formatMeasurementSpans("output-population", firstPopulation.people)
        } else {
            console.log('No data available.');
        }
    });


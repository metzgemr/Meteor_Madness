/*Generated with the help of AI (ChatGPT) - troubleshooting*/

console.log("Meteor Globe loaded");

const myDOMElement1 = document.getElementById('meteor-container');

const meteorTexture = '../images/textures/meteor_texture.png';
function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + (value - inMin) * (outMax - outMin) / (inMax - inMin);
}
const myMeteor = Globe()(myDOMElement1)
    .globeImageUrl(meteorTexture)
    .showAtmosphere(false)
    .backgroundColor('black');

const controls = myMeteor.controls();
controls.enableZoom = false;   // DOnt allow zoom





myDOMElement1.style.width = '250px';
myDOMElement1.style.height = '250px';

document.addEventListener('DOMContentLoaded', () => {
    const radiusSlider = document.getElementById('radiusSlider');
    let mapped = mapRange(radiusSlider.value, 0.5, 5000, 20, 4.5);
    myMeteor.pointOfView({
        altitude: mapped
    }, 3000);
    radiusSlider.addEventListener('input', (e) =>{
        let mapped = mapRange(e.target.value, 0.5, 5000, 20, 4.5);
        myMeteor.pointOfView({
            altitude: mapped
        }, 0);

    });
});

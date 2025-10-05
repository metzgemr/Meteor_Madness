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
    const weightSlider = document.getElementById('weightSlider');
    let mapped = mapRange(weightSlider.value, 0.5, 15840, 20, 4.5);
    myMeteor.pointOfView({
        altitude: mapped
    }, 3000);
    weightSlider.addEventListener('input', (e) =>{
        let mapped = mapRange(e.target.value, 0.5, 15840, 20, 4.5);
        myMeteor.pointOfView({
            altitude: mapped
        }, 0);

    });
});

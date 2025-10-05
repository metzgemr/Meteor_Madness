console.log("Meteor Globe loaded");

const myDOMElement1 = document.getElementById('meteor-container');

const meteorTexture = '../images/meteor_texture.png';

const myMeteor = Globe()(myDOMElement1)
    .globeImageUrl(meteorTexture)
    .showAtmosphere(false)
    .backgroundColor('black');

myDOMElement1.style.width = '250px';
myDOMElement1.style.height = '250px';

window.addEventListener('resize', () => {
    const { offsetWidth, offsetHeight } = container;
    myGlobe.width([offsetWidth]);
    myGlobe.height([offsetHeight]);
});
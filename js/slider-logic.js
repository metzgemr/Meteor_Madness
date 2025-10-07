document.addEventListener('DOMContentLoaded', () => {
    const radiusSlider = document.getElementById('radiusSlider');
    const angleSlider = document.getElementById('angleSlider');
    const densitySlider = document.getElementById('densitySlider');
    const velocitySlider = document.getElementById('velocitySlider');

    const radiusSliderValue = document.getElementById('radiusSliderValue');
    const angleSliderValue = document.getElementById('angleSliderValue');
    const densitySliderValue = document.getElementById('densitySliderValue');
    const velocitySliderValue = document.getElementById('velocitySliderValue');

    // initialize displayed values
    radiusSliderValue.textContent = radiusSlider.value;
    angleSliderValue.textContent = angleSlider.value;
    densitySliderValue.textContent = densitySlider.value;
    velocitySliderValue.textContent = velocitySlider.value;

    // update on input
    radiusSlider.addEventListener('input', (e) => radiusSliderValue.textContent = e.target.value);
    angleSlider.addEventListener('input', (e) => angleSliderValue.textContent = e.target.value);
    densitySlider.addEventListener('input', (e) => densitySliderValue.textContent = e.target.value);
    velocitySlider.addEventListener('input', (e) => velocitySliderValue.textContent = e.target.value);
});

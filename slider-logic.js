document.addEventListener('DOMContentLoaded', () => {
    const weightSlider = document.getElementById('weightSlider');
    const angleSlider = document.getElementById('angleSlider');
    const densitySlider = document.getElementById('densitySlider');

    const weightSliderValue = document.getElementById('weightSliderValue');
    const angleSliderValue = document.getElementById('angleSliderValue');
    const densitySliderValue = document.getElementById('densitySliderValue');

    weightSliderValue.textContent = weightSlider.value;
    angleSliderValue.textContent = angleSlider.value;
    densitySliderValue.textContent = densitySlider.value;

    weightSlider.addEventListener('input', (e) => weightSliderValue.textContent = e.target.value);
    angleSlider.addEventListener('input', (e) => angleSliderValue.textContent = e.target.value);
    densitySlider.addEventListener('input', (e) => densitySliderValue.textContent = e.target.value);
});

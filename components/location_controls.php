<div id="meteor-controls-wrapper">
    <section id="meteor-img-container">
        <section id="meteor-container"></section>
        <script src="https://cdn.jsdelivr.net/npm/globe.gl"></script>
        <script src="../js/meteor.js"></script>
    </section>

    <label for="radiusSlider">Choose meteor radius (m):</label>
    <input type="range" id="radiusSlider" min="0.5" max="5000" value="2500" step="0.5">
    <p>Current Value: <span id="radiusSliderValue">2500</span></p>

    <label for="angleSlider">Choose angle of impact (degrees):</label>
    <input type="range" id="angleSlider" min="0" max="180" value="90" step="1">
    <p>Current Value: <span id="angleSliderValue">90</span></p>

    <label for="densitySlider">Choose meteor density (g/cm³):</label>
    <input type="range" id="densitySlider" min="0.5" max="8" value="4" step="0.5">
    <p>Current Value: <span id="densitySliderValue">4</span></p>

    <label for="velocitySlider">Choose meteor velocity (km/s):</label>
    <input type="range" id="velocitySlider" min="10" max="80" value="45" step="1">
    <p>Current Value: <span id="velocitySliderValue">45</span></p>

    <button id="run_btn" type="submit">Run Simulation</button>
    <script src="../js/controller-submit.js"></script>
</div>
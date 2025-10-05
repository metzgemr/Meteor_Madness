<div id="meteor-controls-wrapper">
    <section id="meteor-img-container">
        <section id="meteor-container"></section>
        <script src="https://cdn.jsdelivr.net/npm/globe.gl"></script>
        <script src="../js/meteor.js"></script>
    </section>

    <label for="weightSlider">Choose meteor radius (ft):</label>
    <input type="range" id="weightSlider" min="0.5" max="15840" value="7000" step="0.5">
    <p>Current Value: <span id="weightSliderValue">value</span></p>

    <label for="angleSlider">Choose angle of impact (degrees):</label>
    <input type="range" id="angleSlider" min="0" max="180" value="90" step="1">
    <p>Current Value: <span id="angleSliderValue">value</span></p>

    <label for="densitySlider">Choose meteor density (g/cm³):</label>
    <input type="range" id="densitySlider" min="0.5" max="8" value="4" step="0.5">
    <p>Current Value: <span id="densitySliderValue">value</span></p>

    <button type="submit">Run Simulation</button>
</div>
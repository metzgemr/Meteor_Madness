<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meteor Madness</title>
    <link rel="stylesheet" href="../css/result_globe_style.css">
    <link rel="stylesheet" href="../css/index_style.css">
    <script src="https://cdn.jsdelivr.net/npm/globe.gl"></script>
    <script src="../js/meteor-calculation.js" defer></script>
    <script src="../js/results.js" defer></script>
</head>

<body id="result-body">
<nav>

</nav>

<main>
    <section>
    <div id="globe-container"></div>
    <script src="../js/globe.js"></script>

    </section>
    <div id="result-container">
        <h1>Simulation Results</h1>
        <h2 id="current-location"></h2>
        <div>
            <h4>Raw Data</h4>
            <ul>
                <li>Mass: <span class="output-mass"></span> </li>
                <li>Energy: <span class="output-energy"></span> </li>
                <li>crater: <span class="output-crater"></span> </li>
                <li>Wave: <span class="output-wave"></span> </li>
                <li>Crater Area: <span class="output-crater-area"></span> </li>
                <li>Wave Area: <span class="output-wave-area"></span> </li>
                <li>Estimated Deaths: <span class="output-population"></span> </li>
            </ul>
        </div>
        <div>
            <h4>Summary</h4>
            <p>
                The impact energy is
                <span class="output-energy"></span> kilotons of TNT.
                If it hits land, the crater would have a
                <span class="output-crater"></span> km diameter
                (<span class="output-crater-area"></span> km²).
                If it hits water, the tsunami wave would cover a
                <span class="output-wave"></span> km diameter circle
                (<span class="output-wave-area"></span> km²).
                This would result in about <span class="output-population"></span> deaths!
            </p>

        </div>
    </div>
</main>

<footer>

</footer>

</body>


</html>


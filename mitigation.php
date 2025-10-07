<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meteor Madness</title>
    <link rel="stylesheet" href="css/mitigation_style.css">
</head>

<body>
<header>
    <h1><b>Kinetic Impactor Simulator</h1>
</header>

<main>
    <div id="counter">Impactors left: 3</div>

    <div class="meteor-container">
    <img id="meteor-img" alt="Meteor" src="/images/meteor.png">
    </div>

    <div id="grid-overlay"></div>
    <div id="coords-display">x: 0, y: 0</div>

    <img id="impactor-img" alt="Kinetic Impactor" src="/images/impactor.png">
</main>

<footer></footer>

<script src="mitigation.js"></script>
</body>
</html>
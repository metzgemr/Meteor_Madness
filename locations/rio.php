<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meteor Madness</title>
    <link rel="stylesheet" href="../css/globe_style.css">
    <script src="../js/slider-logic.js"></script>
    <script src="../js/set-location-bg.js"></script>
</head>

<body id="body">
<script type="text/javascript">
    setBackground('../images/locations/rio_day.png', '../images/locations/rio_night.png');
</script>


<?php
$locationTitle = "RIO DE JANEIRO";
$locationImageUrl = "../images/location-titles/rio_title.png";
include '../components/location_header.php';
?>


<main>
    <?php
    include '../components/location_controls.php';
    ?>
</main>

<footer>

</footer>

</body>


</html>


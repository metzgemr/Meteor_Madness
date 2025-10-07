let submitButton = document.getElementById('run_btn');
submitButton.addEventListener('click', function(e) {
    const radiusSlider = document.getElementById('radiusSlider');
    const angleSlider = document.getElementById('angleSlider');
    const densitySlider = document.getElementById('densitySlider');
    const velocitySlider = document.getElementById('velocitySlider');


    const thisUrl = new URL(window.location.href);
    const fileName = thisUrl.pathname.split('/').pop().replace('.php', '');
    const tod = thisUrl.searchParams.get('tod');

    const url = `../locations/location_result.php?loc=${fileName}&tod=${tod}` +
        `&r=${radiusSlider?.value ?? ''}` +
        `&a=${angleSlider?.value ?? ''}` +
        `&d=${densitySlider?.value ?? ''}` +
        `&v=${velocitySlider?.value ?? ''}`;

    window.location.href = url;



})
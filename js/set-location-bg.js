function setBackground(dayUrl, nightUrl) {
    const params = new URLSearchParams(window.location.search);
    const tod = params.get('tod');
    const bgURL = tod === 'n' ? nightUrl : dayUrl;
    document.body.style.color = 'white';
    document.body.style.backgroundImage = `url('${bgURL}')`;
}
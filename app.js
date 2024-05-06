window.addEventListener('scroll', function () {
    var headerDiv = document.querySelector('header div');
    var headerText = document.querySelector('header p');
    var scrollY = window.scrollY || window.pageYOffset;

    // Calculate alpha for background color change
    var alpha = Math.min(scrollY / 165, 1);
    headerDiv.style.backgroundColor = 'rgba(244, 110, 0, ' + alpha + ')';
    if (scrollY == 0 ) headerDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.311)'

    // Calculate font size change
    var fontSize = 26 - (scrollY / 20);
    fontSize = Math.max(fontSize, 18);
    headerText.style.fontSize = fontSize + 'px';
});
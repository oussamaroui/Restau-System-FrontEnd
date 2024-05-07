window.addEventListener('scroll', function () {
    var headerDiv = document.querySelector('header div');
    var headerText = document.querySelector('header p');
    var scrollY = window.scrollY || window.pageYOffset;

    // Calculate font size change
    var fontSize = 26 - (scrollY / 20);
    fontSize = Math.max(fontSize, 18);
    headerText.style.fontSize = fontSize + 'px';
});

var categories = document.querySelectorAll('#category div');

categories.forEach(function (category) {
    category.addEventListener('click', function () {
        if (category.getAttribute('style') == "background-color: rgba(244, 110, 0, 0.3); border: 1px solid rgb(244, 110, 0);") {
            category.style.backgroundColor = "white";
            category.style.border = "1px solid white";
        } else {
            categories.forEach(function (otherCategory) {
                otherCategory.style.backgroundColor = "";
                otherCategory.style.border = "";
            });
            category.style.backgroundColor = "rgba(244, 110, 0, 0.3)";
            category.style.border = "1px solid rgba(244, 110, 0)";
        }
    });
});

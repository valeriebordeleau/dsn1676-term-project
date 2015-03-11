var $toggle = $('.toggle');
var $navItems = $('.nav-items');

$toggle.on('click', function () {
    $navItems.toggleClass('js-toggle-appear');
});
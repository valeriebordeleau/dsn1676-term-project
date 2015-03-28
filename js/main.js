$('.nav-items').localScroll();
$('.bk-top').localScroll();

var $toggle = $('.toggle');
var $navItems = $('.nav-items');

$toggle.on('click', function () {
    $navItems.toggleClass('js-toggle-appear');
});

var $thingsToDo = $('.things-to-do');
var $toDo = $('.to-do');

$thingsToDo.on('click', function () {
    $toDo.toggleClass('js-to-do-appear');
});

var $thingsToSee = $('.things-to-see');
var $toSee = $('.to-see');

$thingsToSee.on('click', function () {
    $toSee.toggleClass('js-to-see-appear');
});

var $thingsToGo = $('.things-to-go');
var $toGo = $('.to-go');

$thingsToGo.on('click', function () {
    $toGo.toggleClass('js-to-go-appear');
});

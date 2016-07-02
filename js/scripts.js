$(document).ready(function() {

    var animateTheCube = function(options) {
        $('.cube').animate({
            rotate: '20deg'
        }, options.speed);

        alert('The cube is animating!');
    };

    var cubeWasClicked = function() {
        animateTheCube({speed: 5});
    };

    $('.cube').click(function() {
        cubeWasClicked();
    });

});
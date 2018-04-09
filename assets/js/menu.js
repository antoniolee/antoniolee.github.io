$( document ).ready(function() {
    function openNav() {
        $('.overlay').width("100%");
    }

    function closeNav() {
        $('.overlay').width("0%");
    }

    
    $('.btn-open').click(openNav);
    $('.btn-close').click(closeNav);
    $('.overlay > div.overlay-content > a').click(closeNav);
});

// document.addEventListener("DOMContentLoaded", function(event) {

//     function openNav() {
//         $('.overlay').width("100%");
//     }

//     function closeNav() {
//         $('.overlay').width("0%");
//     }

    
//     $('.btn-open').click(openNav);
//     $('.btn-close').click(closeNav);
//     $('.overlay > div.overlay-content > a').click(closeNav);
// });
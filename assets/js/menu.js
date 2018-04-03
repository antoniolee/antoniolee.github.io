$( document ).ready(function() {
    function openNav() {
        document.getElementById("nav-overlay").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("nav-overlay").style.width = "0%";
    }

    
    $('.btn-open').click(openNav);
    $('.btn-close').click(closeNav);

});
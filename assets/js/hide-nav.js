$(document).ready(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (window.pageYOffset > 140){
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nav").style.top = "0";
            } else {
                document.getElementById("nav").style.top = "-140px";
            }
        }
        prevScrollpos = currentScrollPos;
    }
});
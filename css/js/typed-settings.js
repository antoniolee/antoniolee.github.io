
document.addEventListener('DOMContentLoaded', function(){

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    var resetElement = document.querySelector('.reset');
    if(resetElement) {
        resetElement.addEventListener('click', function() {
            document.getElementById('typed')._typed.reset();
        });
    }

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
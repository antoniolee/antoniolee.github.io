document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // Barba.js Views
    // http://barbajs.org/views.html
    // Handle Javascript states/events on different pages with pushState navigation

    var Homepage = Barba.BaseView.extend({
        namespace: 'homepage',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
            console.log("entered homepage");
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    // Example from barba.js
    // Default behavior of loading pages
    var HideShowTransition = Barba.BaseTransition.extend({
        start: function() {
            this.newContainerLoading.then(this.finish.bind(this));
        },

        finish: function() {
            document.body.scrollTop = 0;
            this.done();
        }
    });

    // Example from barba.js
    // FadeIn and FadeOut transitions on page load
    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */
            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },
        fadeOut: function() {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */
            return $(this.oldContainer).animate({ opacity: 0 }, 333).promise();
        },
        fadeIn: function() {
            window.scrollTo(0, 0);
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */
            var _this = this;
            var $el = $(this.newContainer);
            $(this.oldContainer).hide();
            $el.css({
                visibility: 'visible',
                opacity: 0
            });
            $el.animate({ opacity: 1 }, 333, function() {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */
                _this.done();
            });
        }
    });

    /**
     * Next step, you have to tell Barba to use the new Transition
     */
    Barba.Pjax.getTransition = function() {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */

        console.log("inside Barba.Pjax.getTransition")

        return FadeTransition;

        // if (Barba.HistoryManager.prevStatus().namespace === 'homepage') {
        //     transitionObj = HideShowTransition;
        // }
    };

    // Function to do something when a new page is ready
    Barba.Dispatcher.on('newPageReady', function(current, prev, container) {
        //container is the html of the new `barba-container`
        function openNav() {
            $('.overlay').width("100%");
        }
    
        function closeNav() {
            $('.overlay').width("0%");
        }
        
        $('.btn-open').click(openNav);
        $('.btn-close').click(closeNav);
        $('.overlay > div.overlay-content > a').click(closeNav);           
        
        
        // Add smooth scrolling to back-to-top link
        $(".btn-to-top, .btn-scroll-down, .smooth-scroll").on('click', function (event) {
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
                }, 633, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });

        // Anime.js
        // Scale Down Homepage


        // Animations currently in order from first to last
        // Move intro section
        let moveIntro = anime({
            targets: 'section.about div.intro',
            translateY: {
                value: -1000,
                duration: 800,
            },
            easing: 'easeInOutQuad',
            autoplay: false
        });

        // Scale down and move section.about
        let scaleDown = anime({
            targets: 'section.about',
            scale: {
                value: .85,
                duration: 800,
            },
            translateY: {
                value: -1100,
                duration: 800,
            },
            // delay: 200,
            easing: 'easeInOutQuad',
            autoplay: false
        });

        // Expand photos
        let expandGrid = anime({
            targets: '.photo-grid',
            // scale: {
            //     value: .9,
            // },
            // rotate: {
            //     value: -90,
            //     duration: 100,
            // },
            // delay: 250,
            easing: 'easeInOutQuad',
            autoplay: false
        });

        // Rotate photos
        let rotatePhotos = anime({
            targets: '.about-photo-container',
            rotate: 90,
            // opacity: .1,
            duration: 500,
            delay: anime.stagger(50), // increase delay by 100ms for each elements.
            easing: 'easeInOutQuad',
            autoplay: false
        });

        let opacityPhotos = anime({
            targets: '.about-photo-container',
            duration: 666,
            opacity: .1,
            delay: anime.stagger(66), // increase delay by 100ms for each elements.
            easing: 'easeInOutQuad',
            autoplay: false
        });


        var presentationMode = 1;
        var locked = false;

        // Presentation mode for About Me
        // Change opacity of images to .05;
        $(document).keypress(function (e) {

            // If keyboard is locked, exit keypress handler
            if(locked){
                return;
            }

            locked = true;

            // 1 is pressed
            // Enter presentation mode
            if (e.which == 49) {
                if (presentationMode == 1) {
                    // console.log("presentationMode = 1")
                    opacityPhotos.play();
                    $("#nav").css("top", "-140px");

                    setTimeout(function () {
                        presentationMode = 2;
                        // $('.photo-grid').css("grid-gap", "1px");
                        $('.about-photo-container').hover(function () {
                            $(this).css("opacity", "1");
                        });
                    }, 800);
                } else {
                    // console.log("presentationMode = 2")

                    setTimeout(function () {
                        presentationMode = 1;
                        $("#nav").css("top", "0px");
                        // $('.photo-grid').css("grid-gap", "10px");
                        $('.about-photo-container').css("opacity", "1");
                    }, 500);
                }

                moveIntro.play();
                scaleDown.play();
                // expandGrid.play();
                // rotatePhotos.play();


                setTimeout(function () { 
                    scaleDown.reverse();
                    moveIntro.reverse();
                    // expandGrid.reverse();
                    // rotatePhotos.reverse();
                }, 2000);
            }
            // 2 is pressed
            // Show navbar
            if (e.which == 50) {
                $("#nav").css("top", "0px");
            }

            // 3 is pressed
            // Reduce opacity
            if (e.which == 51) {
                $('.about-photo-container').css("opacity", "0.15");
                $('.about-photo-container').hover(function () {
                    $(this).css("opacity", "1");
                });
            }

            // 4 is pressed
            // Set opacity = 1
            if (e.which == 52) {
                $('.about-photo-container').css("opacity", "1");
            }

            // 5 is pressed
            // 
            if (e.which == 53) {

            }

            // unlock keyboard input after 3 seconds
            setTimeout(function () { locked = false; }, 2010); 
        });

     });

    Barba.Prefetch.init();

    // Don't forget to init the view!
    Homepage.init();

    // Start Barba.js 
    Barba.Pjax.start();

});
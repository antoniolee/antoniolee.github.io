document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // Barba.js Views
    // http://barbajs.org/views.html
    // Handle Javascript states/events on different pages with pushState navigation

    var Homepage = Barba.BaseView.extend({
        namespace: 'homepage',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
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
                // callback: function() { foo(); },
                // resetCallback: function() { newTyped(); }
            });

            var resetElement = document.querySelector('.reset');
            if (resetElement) {
                resetElement.addEventListener('click', function() {
                    document.getElementById('typed')._typed.reset();
                });
            }
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
    };

    // Don't forget to init the view!
    Homepage.init();

    // Start Barba.js 
    Barba.Pjax.start();
});
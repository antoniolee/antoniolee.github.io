// app.js

// define our application and pull in ngRoute and ngAnimate
var antonioApp = angular.module('antonioApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
antonioApp.config(function($routeProvider /*$locationProvider*/) {

    $routeProvider

    	// home page
    	.when('/', {
    		templateUrl: 'views/home.html',
            controller: 'mainController'
    	})

    	// about page
    	.when('/about', {
    		templateUrl: 'views/about.html',
            controller: 'aboutController'
    	})

    	// Works page
    	.when('/works', {
    		templateUrl: 'views/works.html',
            controller: 'worksController'
    	})

        // Blog
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'blogController'
        })

        // Contact
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })

        // Now We're Cookin' 
        .when('/nwc', {
            templateUrl: 'views/nwc.html',
            controller: 'nwcController'
        })

        // Solar Crysis 
        .when('/solarcrysis', {
            templateUrl: 'views/solarcrysis.html',
            controller: 'solarcrysisController'
        })

        // Falmouth 
        .when('/falmouth', {
            templateUrl: 'views/falmouth.html',
            controller: 'falmouthController'
        })

        // Moody
        .when('/moody', {
            templateUrl: 'views/moody.html',
            controller: 'moodyController'
        })

        // Fofofadi
        .when('/fofofadi', {
            templateUrl: 'views/fofofadi.html',
            controller: 'fofofadiController'
        })

        // Quaternion
        .when('/quaternion', {
            templateUrl: 'views/quaternion.html',
            controller: 'quaternionController'
        })

        // void
        .when('/void', {
            templateUrl: 'views/void.html',
            controller: 'voidController'
        })

        // void
        .when('/fofofadi-1', {
            templateUrl: 'views/fofofadi-1.html',
            controller: 'fofofadiController'
        })


        // SVG
        .when('/svg', {
            templateUrl: 'views/svg.html',
            controller: 'svgController'
        });

   // $locationProvider.html5Mode(true);        
});


// CONTROLLERS ============================================
// home page controller
antonioApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
    $(".nav").removeClass('bg-gray')
    
    function loadingAnimation() {
        // CSS Animation
        $('.home-content').removeClass("hidden");
        $('.home-content').addClass("animated fadeIn");
      }

    setTimeout(loadingAnimation, 250);
});

// works page controller
antonioApp.controller('worksController', function($scope) {
    $scope.pageClass = 'page-works';
    $(".nav").removeClass('bg-gray')
});

// blog page controller
antonioApp.controller('blogController', function($scope) {
    $scope.pageClass = 'page-blog';
});

// contact page controller
antonioApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

// nwc page controller
antonioApp.controller('nwcController', function($scope) {
    $scope.pageClass = 'page-nwc';
});

// moody page controller
antonioApp.controller('moodyController', function($scope) {
    $scope.pageClass = 'page-moody';
});

// falmouth page controller
antonioApp.controller('falmouthController', function($scope) {
    $scope.pageClass = 'page-falmouth';
});

// solarcrysis page controller
antonioApp.controller('solarcrysisController', function($scope) {
    $scope.pageClass = 'page-solarcrysis';
});

// fofofadi page controller
antonioApp.controller('fofofadiController', function($scope) {
    $scope.pageClass = 'page-fofofadi';
});

// void page controller
antonioApp.controller('voidController', function($scope) {
    $scope.pageClass = 'page-void';

     $(document).ready(function(){
    var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0, num = 350, 
  s, a, b, 
  x, y, _x, _y,
  _t = 1 / 60;

  var speed = 1;

var anim = function() {
  $.fillStyle = 'hsla(0, 0%, 90%, .7)';
  $.fillRect(0, 0, w, h);
  for (var i = 0; i < 1; i++) {
    x = 0; 
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x += .6 * Math.sin(15);
      y = x * Math.sin(i + speed * t + x /20)/.5;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j) * Math.PI / 2.0;
      $.lineWidth = .2;
      $.arc(w / 2- _x, h / 2 -_y, 0, 0, 2 * Math.PI);
    }
    $.strokeStyle = 'hsla(0,0%,0%,1)';
    $.stroke();
  }
  t += _t;
  window.requestAnimationFrame(anim);
};
anim();

setInterval(function() {
   speed += .01;
}, 15);

setInterval(function() {
   speed = speed *-1;
}, 2500);

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
});

  var turtle = document.getElementById("turtle-smoking-small");
  TweenMax.to(turtle, 2, {left: "300px"});

});

// quaternion page controller
antonioApp.controller('quaternionController', function($scope) {
    $scope.pageClass = 'page-quaternion';
    $(document).ready(function(){
  
var c = document.getElementById('canv'),
  $ = c.getContext('2d'),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  t = 0,
  num = 450,
  u = 0,
  _u,
  s, a, b,
  x, y, _x, _y,
  _t = 1 / 60;

var speed = 5.0;

var anim = function() {
  $.globalCompositeOperation = 'source-over';
  $.fillStyle = 'hsla(0, 0%, 0%, .75)';
  $.fillRect(0, 0, w, h);
  $.globalCompositeOperation = 'lighter';
  for (var i = 0; i < 2; i++) {
    x = 0;
    _u = (u / 4) + i;
    $.beginPath();
    for (var j = 0; j < num; j++) {
      x -= .72 * Math.sin(4);
      y = x * Math.sin(i + speed * t + x / 20) / 2;
      _x = x * Math.cos(b) - y * Math.sin(b);
      _y = x * Math.sin(b) + y * Math.cos(b);
      b = (j * 3) * Math.PI / 6.8;
      $.lineWidth = .18;
      $.arc(w / 2 - _x, h / 2 - _y, .5, 0, 2 * Math.PI);
    }
    var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 0, w / 2 + _x, h / 2 + _y);
    g.addColorStop(0.0, 'hsla(' + (u) + ',85%,50%,1)');
    g.addColorStop(0.5, 'hsla(' + (_u) + ',85%,40%,1)');
    g.addColorStop(1, 'hsla(0,0%,5%,1)');
    $.strokeStyle = g;
    $.stroke();
  }
  t += _t;
  u -= .2;
  window.requestAnimationFrame(anim);
};
anim();

setInterval(function() {
   speed += .001;
}, 15);


setInterval(function() {
   speed = speed *-1;
}, 1500);

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
});

});

// svg page controller
antonioApp.controller('svgController', function($scope) {
    $scope.pageClass = 'page-svg';
    $(".nav").addClass('bg-gray');
});





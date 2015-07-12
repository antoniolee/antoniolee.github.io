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

        // case-study-template
        .when('/nwc', {
            templateUrl: 'views/nwc.html',
            controller: 'nwcController'
        });

   // $locationProvider.html5Mode(true);        
});


// CONTROLLERS ============================================
// home page controller
antonioApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
antonioApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// works page controller
antonioApp.controller('worksController', function($scope) {
    $scope.pageClass = 'page-works';
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


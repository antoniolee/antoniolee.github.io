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

    	// contact page
    	.when('/contact', {
    		templateUrl: 'views/contact.html',
            controller: 'contactController'
    	})

        .when('/svg', {
            templateUrl: 'views/svg.html',
            controller: 'svgController'
        })

        .when('/works', {
            templateUrl: 'views/works.html',
            controller: 'svgController'
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

// contact page controller
antonioApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

// svg page controller
antonioApp.controller('svgController', function($scope) {
    $scope.pageClass = 'page-svg';
});

// works page controller
antonioApp.controller('svgController', function($scope) {
    $scope.pageClass = 'works-svg';
});

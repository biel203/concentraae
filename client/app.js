'use strict';


var app = angular.module('app', ['ngRoute'])
    .config(appConfig);

function appConfig($routeProvider, $locationProvider) {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }

    $routeProvider
        .when('/', {
            templateUrl: 'view/home/home.template.html',
            controller: 'home.controller'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true,
        rewriteLinks: true
    });
}




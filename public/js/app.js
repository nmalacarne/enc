'use strict';

var mod = angular.module('App', [
    'ui.router',
    'App.controllers',
    'App.directives',
    'App.services'
]);

// route setup
mod.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('enc', {
            templateUrl: './templates/enc/wrapper.html'
        })
        .state('acc', {
            templateUrl: function() {
                // TODO: check if user is currently logged in -nm
                return './templates/acc/signin.html';
            }
        });
});
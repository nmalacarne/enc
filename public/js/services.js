'use strict';

var mod = angular.module('App.services', []);

// encounter service
mod.service('Encounter', ['$http',
    function($http) { 
        return {
            get: function()
            {
                $http.get('enc');
            },
            step: function()
            {
                console.log('step');//$http.get('enc/step');
            },
            reset: function()
            {
                console.log('reset');//$http.get('enc/reset');
            },
            add: function() {
                console.log('add');
            }
        };
    }
]);
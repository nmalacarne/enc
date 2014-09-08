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
            new: function()
            {
                $http.get('enc/new');
            }
        };
    }
]);
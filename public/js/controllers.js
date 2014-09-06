'use strict';

var mod = angular.module('App.controllers', []);

mod.controller('EncController', ['$scope', 
    function($scope) {
        $(document).ready(function(){
            $('[data-toggle=tooltip]').tooltip();
        });
    }
]);
'use strict';

var mod = angular.module('App.directives', []);

mod.directive('encStepBtn', ['Encounter', 
    function(Encounter) {
        return {
            restrict: 'E',
            templateUrl: './templates/enc/step.button.html',
            link: function(scope, element) {
                element.bind('click', function() {
                    Encounter.step();
                });
            }
        };
    }
]);
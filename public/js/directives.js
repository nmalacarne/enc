'use strict';

var mod = angular.module('App.directives', []);

mod.directive('encStepButton', ['Encounter', 
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

mod.directive('encResetButton', ['Encounter', 
    function(Encounter) {
        return {
            restrict: 'E',
            templateUrl: './templates/enc/reset.button.html',
            link: function(scope, element) {
                element.bind('click', function() {
                    Encounter.reset();
                });
            }
        };
    }
]);

mod.directive('encAddActButton', ['Encounter', 
    function(Encounter) {
        return {
            restrict: 'E',
            templateUrl: './templates/enc/add.act.button.html',
            link: function(scope, element) {
                element.bind('click', function() {
                    Encounter.add();
                });
            }
        };
    }
]);
'use strict';

var mod = angular.module('App.directives', []);

mod.directive('encStep', ['Encounter', 
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

mod.directive('encReset', ['Encounter', 
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

mod.directive('encAddActForm', ['Encounter', 
    function(Encounter) {
        return {
            restrict: 'E',
            templateUrl: './templates/enc/add.act.form.html',
            link: function(scope, element) {
                element.bind('click', function() {
                    Encounter.add();
                });
            }
        };
    }
]);
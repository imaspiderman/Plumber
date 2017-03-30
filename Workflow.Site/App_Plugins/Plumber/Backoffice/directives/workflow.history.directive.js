﻿(function () {
    'use strict';

    function historyDirective() {

        var directive = {
            restrict: 'E',
            scope: {
                items: '=',
                instanceView: '='
            },
            templateUrl: '../app_plugins/plumber/backoffice/partials/workflowhistorytemplate.html'
        };

        return directive;
    }

    angular.module('umbraco.directives').directive('wfHistory', historyDirective);

}());
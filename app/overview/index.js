/**
 * A module for the overview
 *
 * @module app/overview/index
 * @exports app/overview/index
 * @version 0.0.1
 */

window.angular && (function (angular) {
    'use strict';

    angular
        .module('app.overview', [
            'ngRoute',
            'app.constants',
            'app.common.services'
        ])
        // Route configuration
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/overview/system', {
                    'templateUrl': 'overview/controllers/server-overview-controller.html',
                    'controller': 'serverOverviewController',
                    authenticated: true
                })
                .when('/overview', {
                    'templateUrl': 'overview/controllers/server-overview-controller.html',
                    'controller': 'serverOverviewController',
                    authenticated: true
                });
        }]);

})(window.angular);

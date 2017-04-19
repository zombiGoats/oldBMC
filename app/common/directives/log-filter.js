window.angular && (function (angular) {
    'use strict';

    angular
        .module('app.common.directives')
        .directive('logFilter', ['APIUtils', function (APIUtils) {
            return {
                'restrict': 'E',
                'templateUrl': 'common/directives/log-filter.html',
                'controller': ['$rootScope', '$scope','dataService', '$location', function($rootScope, $scope, dataService, $location){
                    $scope.dataService = dataService;
                    $scope.toggleSeverityAll = function(){
                        $scope.selectedSeverity.all = !$scope.selectedSeverity.all;

                        if($scope.selectedSeverity.all){
                            $scope.selectedSeverity.low = true;
                            $scope.selectedSeverity.medium = true;
                            $scope.selectedSeverity.high = true;
                        }
                    }

                    $scope.toggleSeverity = function(severity){
                        $scope.selectedSeverity[severity] = !$scope.selectedSeverity[severity];

                        if($scope.selectedSeverity.low && 
                           $scope.selectedSeverity.medium && 
                           $scope.selectedSeverity.high){
                            $scope.selectedSeverity.all = true;
                        }else{
                            $scope.selectedSeverity.all = false;
                        }
                    }
                }]
            };
        }]);
})(window.angular);

/**
 * Created by UNANAC1 on 7/7/2016.
 */
angular.module('myApp',['ui.bootstrap'])

.controller('myController',['$scope', function ($scope) {

    $scope.lastname = 'Nanayakkara';

    $scope.firstnames = [
        'Chaanya',
        'Charitha',
        'Chaya',
        'Chanaka'
    ];

    $scope.name = $scope.selectedName;

    $scope.singleModel = 1;


    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

}]);



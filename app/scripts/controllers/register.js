'use strict';

angular.module('nodeJwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function() {
        var url = '/'
        var user = {};
        $http.post(url, user)
            .success(function(res) {
                alert('success', 'OK', 'You are now registered');
            })
            .error(function(err) {
                alert('warning', 'Oops', 'Could not register');
            });
    };
  });

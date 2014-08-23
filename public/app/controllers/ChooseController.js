angular.module('chatApp').controller('ChooseController', function ($scope) {
    $scope.pageClass = 'page-chooseUsername';

    $scope.checkUsername = function(event){
        console.log($scope.guest.username);
    }
});

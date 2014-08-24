angular.module('chatApp').controller('ChooseController', function ($scope, mySocket, $state) {
    $scope.pageClass = 'page-chooseUsername';

    $scope.checkUsername = function(event){
        var username = $scope.guest.username;

        mySocket.emitEvent('login', {user: username});

        mySocket.userLogged().then(function(data){
            console.log(data);
        });

        $state.go('rooms');
    };
});
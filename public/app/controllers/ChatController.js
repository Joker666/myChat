angular.module('chatApp').controller('ChatController', function ($scope, mySocket) {
    mySocket.userLogged();
});
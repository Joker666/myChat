angular.module('chatApp').controller('RoomsController', function ($scope, $state, $stateParams) {
    $scope.pageClass = 'rooms-page';
    $scope.rooms = [
        {"id": 1, "name": "Music", "numberOfUsers": 13},
        {"id": 2, "name": "Art", "numberOfUsers": 113},
        {"id": 3, "name": "Science", "numberOfUsers": 123},
        {"id": 4, "name": "Meteor", "numberOfUsers": 143},
        {"id": 5, "name": "Movie", "numberOfUsers": 163},
        {"id": 6, "name": "Chess", "numberOfUsers": 13},
        {"id": 7, "name": "Soccer", "numberOfUsers": 613},
        {"id": 8, "name": "Fun", "numberOfUsers": 133},
        {"id": 9, "name": "Sex", "numberOfUsers": 132}
    ];
    $scope.rooms.left = function(){
        $scope.rooms.autoLeft = true;
    };
});
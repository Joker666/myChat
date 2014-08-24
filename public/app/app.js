var chatApp = angular.module('chatApp', [
    'ui.router',
    'ngAnimate',
    'ui.utils',
    'btford.socket-io'
]);

chatApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/#");
    $stateProvider
        .state('chooseUsername', {
            url: '/',
            templateUrl: 'templates/chooseUsername.html',
            controller: 'ChooseController'
        })
        .state('rooms', {
            url: '/rooms',
            templateUrl: 'templates/rooms.html',
            controller: 'RoomsController'
        })
        .state('rooms.chat', {
            url: '/:roomId/chat',
            views: {
                'chatNow': {
                    templateUrl: 'templates/chat.html',
                    controller: 'ChatController'
                }
            }
        })

});

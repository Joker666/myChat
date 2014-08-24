angular.module('chatApp').factory('mySocket', function (socketFactory, $q) {
    var myIoSocket = io.connect('/chat');
    mySocket = socketFactory({
        ioSocket: myIoSocket
    });
    console.log('socket.io connected on chat namespace');
    return {
        emitEvent: function(event, payload){
            mySocket.emit(event, payload);
        },
        userLogged: function(){
            var defer = $q.defer();
            mySocket.on('user:logged',function(data) {
                    defer.resolve(data);
            });
            return defer.promise;
        },
        userJoined: function(){
            mySocket.on('user:joined', function(data){
                console.log(data);
                return data;
            });
        }
    };
});
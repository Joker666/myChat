var _ = require('underscore');

module.exports = function(app, io){
    // Initialize a new socket.io application, named 'chat' on 'chat' namespace
    var chat = io.of('/chat').on('connection', function (socket) {
        console.log('a user connected');
        // When the client emits 'login', save his name
        socket.on('login', function(data) {
            socket.username = data.user;
            console.log(socket.username + ' connected');
            socket.emit('user:logged', {
                username: socket.username
            });
        });

        socket.on('join room', function(data) {
            socket.join(data.room);
            addUserToRoomsList(socket.username, data.room);
            //console.log(chat.adapter.rooms);
            //console.log(Object.keys(chat.adapter.rooms[data.room]).length);
            console.log(userRooms);

            socket.emit('user:joined', {
                username: socket.username,
                roomname: data.room,
                number: getNumberOfUsers(data.room)
            });
        });

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });

    var userRooms = [];
    var addUserToRoomsList = function(userName, roomName){
        if(!userRooms[roomName])
            userRooms[roomName] = [];
        if(userRooms[roomName].indexOf(userName)==-1)
            userRooms[roomName].push(userName);
    };
    var getNumberOfUsers = function(roomname){
        return Object.keys(chat.adapter.rooms[roomname]).length;
    };
};
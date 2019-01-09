var socket=io();

socket.on('connect',()=>{

console.log("connected");

});



socket.emit('newUser',"hello i am connected");
socket.on('disconnect',()=>{
    console.log("disconnect from server");
})
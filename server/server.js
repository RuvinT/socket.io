const path=require('path');
const express=require('express');
const http=require('http');
var app=express();
const port=process.env.PORT||3000;
const publicPath=path.join(__dirname,'../public');
const socketIO=require('socket.io');
const server=http.createServer(app);
app.use(express.static(publicPath));

var io=socketIO(server);

io.on('connection',(socket)=>{

    console.log("new connection");
   socket.on('message',(message)=>{

    socket.broadcast.emit('chatmessage',message);

   }) ;
   
  
});

   server.listen(port,()=>{
    console.log(port);
});
var socket = io();

socket.on('connect',function(){
  console.log('Connecte to server');

socket.emit('createMessage',{
  to:'jan@example.com',
  test:'Hey, This is GyaniBaba'
});
});

socket.on('disconnect',function(){
  console.log('disconnected');
});

socket.on('newMessage',function(message){
  console.log('Got new message',message);
});

// JavaScript source code
let app = require('http').createServer(); // create HTTP server
let io = require('socket.io')(app, {path: '/socket.io'}); // bind Socket to HTTP server
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');
io.on('connection', function(socket) {
   console.log('Client connected');
   socket.emit('fromServer', {id: 'I Hate School'}); // send message fromServer to client

   socket.on('fromClient', function(data) { // listen for fromClient message
      console.log('Recieved from client: ' + data.id);
	  socket.emit('serverReply', {id: 'What is your GPA?'});
   });
   socket.on('clientReply', function(data){//listen to clients reply
		console.log('Recieved from client: ' + data.id);
   });
   socket.on('disconnect', function(){
	 console.log('Client disconnected')
   });
});

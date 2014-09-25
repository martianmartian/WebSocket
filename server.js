// this is the script of a local server

var ws=require('ws');// including library

var wss = ws.Server; // node.js has both server and client. this is Server
// constructor of a websocket server.
var server =new wss({port:8000});
// {port:8000}   local server standard
//this whole thing represents the socket serverr
var storage=[]; // where the data stored, when it's sent from client to 
			//server.
			// temporary storage.

server.on('connection',function(connection){
	//when the coonnection is made, do something with the "socket/connection"
	console.log('connection made!');
// if there's any client connection anytime, this function gets called.
	
	connection.on('message',function(data){
	console.log(data);
		//when getting a message, log the data
	storage.push(data);
	
	})

})


function informClient(clientSocket){
	clientSocket.send(JSON.stringify(storage));
}


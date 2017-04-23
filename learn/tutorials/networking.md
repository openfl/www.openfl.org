---
title: Networking
---

## Introduction

Networking in Haxe can be done using the Socket class, from package sys.net included in the Haxe API.  This Socket class uses TCP to transfer data between a client and server.  This class does not work when targeting HTML5.

## Setting Up A Server

Here we setup a server which listens for connections and can accept these incoming connections:

{% highlight haxe %}

	package;

	import sys.net.Socket;
	import sys.net.Host;
	import haxe.io.Bytes;
	import haxe.io.Bytes.ofString;
	import sys.net.Address;

	class Server {

		public var serverSocket:Socket = new Socket();
		public var c:Socket = new Socket();
		public var activeConnection:Bool = false;
		
		public function new () {   
			serverSocket.setBlocking(false);  //Blocking blocks all active code while the server processes
			var port:Int = 4028;
			serverSocket.bind(new sys.net.Host(Host.localhost()), port);  //Bind port 4028 on localhost
			serverSocket.listen(10);  //10 is our max connections.
		}
		
		
		function acceptConnection() {
			try{
				c = serverSocket.accept();  //Accepts incoming connection.
				c.setBlocking(false);
			} catch (err:Dynamic){
				trace("No Client to connect");
			}
		}
	}

{% endhighlight %}

Our Server code starts by listening on port 4028, we can loop over acceptConnection() to connect to new clients as they attempt a connection.

## Setting up a Client

For our Client we create a socket, though instead of listening for incoming connections we connect directly to a server.

{% highlight haxe %}

	package;

	import sys.net.Socket;
	import sys.net.Host;
	import haxe.io.Bytes;

	class Client {
		
		public var socket:Socket = new Socket();
		public var connected:Bool = false;
		
		public function new () {}
		
		public function ConnectToServer():Void{
			var port = 4028;
			try{
				socket.connect(new Host(Host.localhost()),port);  //Here Localhost can be any servers IP-address
				socket.setBlocking(false);
				trace("Client Connected");
			}catch(err:Dynamic){
				trace("Failed to Connect");
			}
		}
		
	}
	
{% endhighlight %}

Here we are connecting to Localhost because that is where our Server is listening from, but generally you want to connect to a server on a remote computer through an IP-address.

## Completing Connection

When you create a Server class it begins listening for an incoming connection, when you create the Client and run connectToServer() it attempts a connection to localhost, where the server we created is listening.

You now run acceptConnection() on the server, this completes the connection and the Socket "c" becomes the completed socket connection.

## Sending Data

The easiest data to send is Byte data.  Bytes can be created from Strings, or Hexidecimal.

For our client we create a function to send the data:

{% highlight haxe %}

public function writeValue(writeValue:String):Void{
		
    var bytesToSend:Bytes = haxe.io.Bytes.ofString(writeValue);
	try{
		socket.output.writeBytes(bytesToSend,0,bytesToSend.length);  //Sends our String encoded as Bytes
	} catch(err:Dynamic){
		trace("Cannot Send Data");
	}
		
{% endhighlight %}

For our Server we create a function for reading the data:

{% highlight haxe %}

    public function readValue():Void {
        try{
            var receivedBytes:Bytes;
            receivedBytes = c.input.read(6);  //The length of the sent data much match the length of the received data, in this case 6.
        }catch(err:Dynamic){
            trace(err);
        }
    }
		
{% endhighlight %}


## Encoding Data

Network data should be compressed as hex code using a data dictionary that maps hex characters to specific commands.  For instance movement data can be encoded as MO2222233333, when sent from the client the server can look up in the data dictionary what this packet means.

Movement: MO, X-Position: 3-7, Y-Position: 8-12

Here Movement is defined as MO meaning character movement, followed by 5 characters representing the X coordinate, and 5 characters representing the Y coordinate.

## Zlib

Large number of Bytes can be compressed using Zlib included with OpenFL.

From the sender we compress the data:

{% highlight haxe %}

    var stringToSend = "12345678910111213141516171819202122232425262728293031323334353637383940";
    var bytesToSend:Bytes = Zlib.compress(haxe.io.Bytes.ofString(stringToSend));
    socket.output.writeBytes(bytesToSend,0,bytesToSend.length);

{% endhighlight %}

From the receiver we decompress the data:

{% highlight haxe %}

    var bytes:Bytes;
    bytes = Zlib.decompress(c.input.read(52));

{% endhighlight %}

## Issues

Any problems? Please visit the [community forums](http://community.openfl.org) if you are experiencing trouble!

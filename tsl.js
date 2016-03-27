var tls = require('tls');
var fs = require('fs');

//TODO how to get these securely in container
var options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

var server = tls.createServer(options, function (socket) {
  console.log('server connected', socket.authorized ? 'authorized' : 'unauthorized');
  //console.log('socket', socket);
  socket.on('error', function(error) {
    console.log('error occured', error);
  });
  socket.write('welcome!\n');
  socket.on('data', function (data) {
    console.log('data', data.toString());
    socket.end();
  });
  socket.pipe(socket);
  //socket.end();
});

server.listen(8443, () => {
  console.log('server bound on 8443');
});
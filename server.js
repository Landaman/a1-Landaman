const http = require('http'),
      fs   = require('fs'),
      port = 3000;

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
    case '/index.html':
      sendFile( response, 'index.html' );
      break;
    case '/styles.css':
      sendFile(response, 'styles.css');
      break;
    case '/hobby':
    case './hobby/index.html':
    case '/hobby.html':
      sendFile(response, 'hobby.html');
      break;
    default:
      response.end( '404 Error: File Not Found' );
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' );
   });
}

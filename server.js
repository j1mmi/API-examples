// this is where the modules we want to use in the code are declared.
// Express.js is specifically used to listen for server requests and return responses. 
const express = require('express');
// You can ignore body-parser for now, it's not used by this code
const bodyParser = require('body-parser');

// We are going to listen for requests on port 3000.  This is just a port that isn't 
// usually in use by computers, so can be used by the program. Any requests to port 3000
// will be routed to our program.  
const port =  3000

// creating an instance of Express.js and assigning it to a variable - the variable "app" is declared 
// as a version of Express.js.  Everything from here will use app to represent Express.js
const app = express();

// This code just enables body-parser to work correctly.  As we are not using this code
// for anything useful, you can just ignore it.  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Here's a list of the possible http codes that http.cat can return (I copied these out manually by hand like a mug).  
// The list will serve as a look-up when we receive a request on Port 3000, either to complete the response description or
// to determine a bad request from the user (i.e. specifying a code that doesnt' exist). 
const httpCodes = {
    "100": "Continue",
    "101": "Switching Protocols",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "204": "No Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "400": "Bad Request",
    "401": "Unauthorised",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm A Teapot",
    "420": "Smoke Weed Everyday",
    "421": "Misdirected Request",
    "422": "Unprocessable Entry",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Unordered Collection",
    "426": "Upgrade Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "444": "No Response",
    "450": "Blocked by Windows Parental Controls",
    "451": "Unavailable for Legal Reasons",
    "500": "Internal Server Error",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "509": "Bandwidth Limit Exceeded",
    "511": "Network Authentication Required",
    "599": "Network Connect Timeout Error"
}

// Here's the heart of the code - a couple of things:
// - Requests for information (like this API performs) are known as GET requests - hence "app.get".  
// Other commonly used request types are POST, PUT and DELETE.  These are HTML protocols, I'll leave you to google this. 
// - The '/cat/:code' is the path we are looking for - ":code" is any text that is entered after cat in the URL.  This text is accessed using "req.params.code".  
// e,g, if the path '/cat/clemFandango' was specified, then calling "req.params.code" would return clemFandango.  
// - The information requested by the user (e.g. the URL path) is stored in the variable res, and the expected response should be supplied in the variable res. 
app.get('/cat/:code', (req,res) => {
  // get the path text specified after cat (e.g. 200)
  var text_in = req.params.code;
  // Compare this value with the http codes specified above. 
  var httpCodeIndex = Object.keys(httpCodes).indexOf(text_in)
  // If the value specified by the user can't be found in the list then -1 will be returned.  In this case we assume that the user dun fucked up, put some error 
  // text together and assign it to the variable "data". 
  if (httpCodeIndex == -1) {
    var data = {
      response_type: 'FAILURE',
      description: 'INVALID INPUT',
      attachments:[{
        image_url: 'https://http.cat/400.jpg'
      }]
    };
  // If the value specified by the user IS found in the list then we assemble a success response and assign it to the variable "data".
  } else {
    var text_out = text_in + ": " + httpCodes[text_in];
    var data = {
      response_type: 'SUCCESS',
      description: text_out,
      attachments:[{
        image_url: 'https://http.cat/' + text_in + '.jpg'
      }]
    };
  }
  // Finally, we add the JSON (the error or success text object - google "JSON", it's a useful thing to understand) to the response variable res.  This then gets
  // sent back to the user as the response. 
  res.json(data);
});


// This code just starts the app object listening to port 3000, so that we can intercept requests on that port.  
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

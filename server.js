/* eslint no-console: 0 */

const express = require('express');
const bodyParser = require('body-parser');

const port =  3000
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

app.get('/cat/:code', (req,res) => {
  var text_in = req.params.code;
  var httpCodeIndex = Object.keys(httpCodes).indexOf(text_in)
  if (httpCodeIndex == -1) {
    var data = {
      response_type: 'FAILURE',
      description: 'INVALID INPUT',
      attachments:[{
        image_url: 'https://http.cat/400.jpg'
      }]
    };
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
  res.json(data);
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

# cat-express-api
A lightweight example of a node express REST API that returns http.cat image URLs

Please read the following article: [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup) to know more about this boilerplate.

## Boilerplate origins
Based on the webpack-express-boilerplate-master created by [Christian Alfoni](https://github.com/christianalfoni/webpack-express-boilerplate).

## Install and Running
`git clone https://github.com/j1mmi/API-examples.git`

1. cd to your cloned directory
2. npm install
3. npm start
4. navigate to http://localhost:3000/cat/*HTML code here* in your browser of choice.  e.g. http://localhost:3000/cat/200


## Notes

### Installation and Running for Matt and Tom

1. ignore the above (as I assume you don't have GIT installed)
2. install node from [here](https://nodejs.org/en/download/)
3. ensure that your local environment variable "Path" includes the path to your installation of node e.g. C:\Route\To\Your\Install\npm.  Node might set this; if not, add this yourself.
4. download the zip from https://github.com/j1mmi/API-examples
5. open up your command console and navigate to the location you downloaded it to e.g. C:\Route\To\The\File\API-examples.  Then type 'npm install'. If you've done the above right then it should start downloading in the command console. 
6. after installation is complete, type npm start in the console. It should say "Listening on Port 3000". 
7. navigate to http://localhost:3000/cat/*HTML code here* in your browser of choice.  e.g. http://localhost:3000/cat/200.  You should see the following: {"response_type":"SUCCESS","description":"200: : {"response_type":"FAILURE","description":"INVALID INPUT","attachments":[{"image_url":"https://http.cat/400.jpg"}]}OK","attachments":[{"image_url":"https://http.cat/200.jpg"}]}.  Inputting any html code on https://http.cat/ should produce a similar response.  Entering a non-valid code will result in: {"response_type":"FAILURE","description":"INVALID INPUT","attachments":[{"image_url":"https://http.cat/400.jpg"}]}.  
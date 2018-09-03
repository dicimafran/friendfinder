/* 
            html: 
                html route dependencies: var path = require("path");
                    path package needed to get correct file path for html

                The html routing function is exported as a module with GET requests for the instance of express that's running.

    html paths
        home.html
        survey.html
        default for when no matching route is found

                Purpose of html routing directory: 
                    handles when users visit a page and shows html page of content
                    What's needed: 
                        GET request with ('path', function (req, res)) {
                            res.sendFile(path.join(__dirname, "../public/reserve.html"));
                        }
                    What's going on:
                        2 arguments are being passed in. A path to the current directory name and a function taking in requests and response from the user.
                        When the user makes a GET request, the server takes the response and redirects the user to the appropriate html file.                    
            
    
    Post

*/


var path = require('path');

module.exports= function(app) {
    app.get('/friends', function(req,res) {
        res.sendFile(path.join(__dirname, '../b.html'));
    });

    app.get('/home', function(req,res) {
        res.sendFile(path.join(__dirname, '../home.html'));
    });

    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, '../b.html'));
    });
};
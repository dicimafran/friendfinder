
/* ============ Pseudocode ===============
    Inputs: 
        Form data text input
        drop=down sorta menu ==> will be using materialize's select class
        Submit button

    Process:
        each person's inputs will be pushed into an array.
        A module of this array will be exported as friends.js

            var person = [ 
                    {
                    name:
                    photo:
                    scores: [0-9]
                    }; 
                ];

    Output: 
        In the API route,  
            
               
============ Table of contents====================

    =====================
    Server Components
    =====================

        Express App setup: 
                app and port variables
                app setup to handle data parsing
        Router: Gives the server a route to travel to when users visit or request data from various URLS.
        Port listening: starts the server

    ===================
    Routes Components
    ===================

     public directory: 
        home route:               
            It has a button leading to the survey
            At the bottom is a list of links leading to the api and githbu repo
        
        survey route:
            It has a floating button which sticks at the lower right so you can go to the home html at any time.

        assets
            css
            images
            js


    routing directory
        api route
        html

    ===================
    ===================

     ===================
    ===================
    
    
   
*/

// ============= Dependencies ===================

var express= require('express');
var bodyParse= require('body=parser');
var path= require('path');


// ===== Express App & Port variables w/ dataparser =====

var app =express();
var PORT= process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================ Router ===================

require('./routes/apiRoutes') (app);
require('./routes/htmlRoutes')(app);

// ============= Port Listener ==================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
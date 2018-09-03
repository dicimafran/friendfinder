/*       
    api route
        requires user data
        spits it the response out as a JSON
        handles what happens when the user visits the page (get)
        handles user input data via post requests.

    app.get
        res.json(blahData);

    app.post
*/

module.exports = function(app) {
    app.get('/api/friends', function(req, res) { 
        res.json();
    });
}

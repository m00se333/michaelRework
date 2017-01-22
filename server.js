var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 5599;
var webpack = require("webpack");
var config = require("./webpack.config");
var app = express();
var compiler = webpack(config);

// body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


//hot reloader
app.use(require("webpack-hot-middleware")(compiler));


//authentication
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");

var strategy = new Auth0Strategy({

    domain: "moose333.auth0.com",
    clientID: "pM267G6IhIIBQ8oEPfewrmDKDquTkFKJ",
    clientSecret: "5ECZzG4hvgPippvQ6GwUnN9FhuHvzAUY1x4VBVZYzXpoiuThUMram-mfqd3vpJZt",
    callbackURL: "http://localhost:5599/callback"

}, function(accessToken, refereshToken, extraParams, profile, done){

    return done(null, profile);
});

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());




//regular server begin

app.use(express.static(path.join(__dirname + "/_build")));


// routes
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", function(req, res){
   // taking in data
   var userInfo = req.body.data
   console.log(userInfo);

   // response
   res.send({type: "HIT", message: userInfo});

});



app.listen(PORT, function(err){
  if (err){
    console.log(err);
    return;
  }
  console.log("Server running on " + PORT);
})




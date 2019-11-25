//requiring the correct dependencies
const path = require('path');
const express = require('express');

//be able to use the express module
const app = express();
//allows it to be run on a locla server or on heroku
const PORT = process.env.PORT || 3000;
//configure middleware
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//require our routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
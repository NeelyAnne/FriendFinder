/*! Your `apiRoutes.js` file should contain two routes:

* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.*/
const path = require("path");
const friends = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    //a list of all of the entries in the friends.js
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //capture all user input
    const userInput = req.body;
    //capturing their scores to be compared
    const userResponses = userInput.scores;
    //empty string for the math name and photo to be inserted into
    const matchName = "";
    const matchImage = "";
    //start large in order to improve comparison
    const difference = 1000;
    //loop through all of the friends already in the array
    for (let i =0; i < friends.length; i++) {
      //now to create the actual answer difference to be compared
      const difference2 = 0;
      for (let i = 0; j < userResponses.length; j++) {
        difference2 += Math.abs(friend[i].scores[j] - userResponses[j]);
      }
      //match with the friend that has the lowest difference
      if (difference2 < difference) {
        //matching them up. FINALLY
        difference = difference2;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    //pushing the newly created friend to the friends array
    friends.push(userInput);
    //responding with the json
    res.json({status: "OK", matchName: matchName, matchImage: macthImage});
  });
};




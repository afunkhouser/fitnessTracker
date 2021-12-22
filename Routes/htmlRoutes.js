var path = require("path");

module.exports = function(app) {
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/exercise.html"));
  });
  // Not quite sure what this is used for yet ....
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/stats.html"));
  });
};
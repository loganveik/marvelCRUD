const path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

//   // add route loads the add.html page, where users can enter new books to the db
  app.get("/update", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/update.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

//   // short route loads the short.html page, where short books in the db are displayed
//   app.get("/short", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/short.html"));
//   });

//   // long route loads the long.html page, where long books in the db are displayed
//   app.get("/long", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/long.html"));
//   });

};

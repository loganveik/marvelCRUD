const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./app/models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes")(app);
require("./app/routes//html-routes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// sync({force:true})
// ^ will wipe tables to start fresh, only do in development and delete it once u do it.
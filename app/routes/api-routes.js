// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/all", function (req, res) {
        db.Character.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.post("/api/create", function (req, res) {
        db.Character.create({
            name: req.body.name,
            imgurl: req.body.imgurl,
            review: req.body.review
        }).then(function (response) {
            res.json(response);
        })
    });

    // app.delete("/api/delete/:id", function (req, res) {
    //     db.Character.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (response) {
    //         res.json(response);
    //     })
    // });

    // app.put("/api/update", function (req, res) {
    //     db.Character.update(req.body,
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });

    // app.get("/api/update/:id", function (req, res) {
    //     db.Character.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });
};

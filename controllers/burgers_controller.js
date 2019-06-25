var express = require("express");
var router = express.Router();
// Import models
var burger = require("../models/burger");
// Create base route which provides all burgers ever created
router.get("/", function(req, res) {
    burger.all(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});
// Create an api route to add burgers to the database
router.post("/api/burgers", function(req, res) {
    burger.create({
        "burger_name": req.body.burger_name},
        function(result) {
            console.log(result);
            res.json({ id: result.id})
        }
    )
});
// Create an api route to edit burger data, dependent on activating the DEVOUR button
router.put("/api/burgers/:id", function(req, res) {
   burger.update({
        id: req.params.id
    }, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    });
});

module.exports = router;
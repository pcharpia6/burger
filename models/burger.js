let orm = require("../config/orm");
// The second step of the calls, comes from the burgers_controller
// sends to the ORM file
var burger = {
    // Gets all burgers
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    // Adds a burger
    create: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    // Changes devoured state
    update: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        });
    }
};
// expose file for the burgers_controller file
module.exports = burger;
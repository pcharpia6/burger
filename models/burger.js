let orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    },
    update: function(name, cb) {
        orm.update(name, function(res) {
            cb(res);
        });
    }
};


module.exports = burger;
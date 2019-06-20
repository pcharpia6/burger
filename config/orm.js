let connection = require("./connection.js");

let orm = {
    selectAll = function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne = function(name, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ("+name+", false);";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne = function(name, cb) {
        var queryString = "UPDATE burgers SET devoured=true WHERE burger_name="+name;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
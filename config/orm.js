let connection = require("./connection.js");

let orm = {
    selectAll = function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            return result;
        });
    },
    insertOne = function(name) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ("+name+", false);";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            return result;
        });
    },
    updateOne = function(name) {
        var queryString = "UPDATE burgers SET devoured=true WHERE burger_name="+name;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            return result;
        });
    }
}

module.exports = orm;
let connection = require("./connection.js");

let orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(name, cb) {
        let query = 'INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)'
        connection.query(query, [name.burger_name, 0], function(err, result) {
            if (err) {console.error(err.stack)};
            cb(result);
    });        
    },
    updateOne: function(id, cb) {
        let query = `UPDATE burgers SET devoured = ? WHERE id = ?`;
        connection.query(query, [1, id.id], function(err, result) {
        if (err) {console.error(err.stack)};
        cb(result);
    });        
    }
}

module.exports = orm;
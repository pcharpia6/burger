let connection = require("./connection.js");
// Create the ORM query strings
let orm = {
    // Gets all burgers for main page
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Adds a burger
    insertOne: function(name, cb) {
        let query = 'INSERT INTO burgers(burger_name, devoured) VALUES (?, ?)'
        connection.query(query, [name.burger_name, 0], function(err, result) {
            if (err) {console.error(err.stack)};
            cb(result);
    });        
    },
    // Changes devoured state
    updateOne: function(id, cb) {
        let query = `UPDATE burgers SET devoured = ? WHERE id = ?`;
        connection.query(query, [1, id.id], function(err, result) {
        if (err) {console.error(err.stack)};
        cb(result);
    });        
    }
}
// Expose ORM queries to other files (models)
module.exports = orm;
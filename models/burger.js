let orm = require("../config/orm");

var act = {
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

// to be moved later
// $.get("/api/all", function(data) {

//     if (data.length !== 0) {

//         for (var i = o; i < data.length; i++) {

//         var entry = $("<div>");

//         if (data[i].devoured == false) {
//             entry.addClass("burger-avail");
//         } else {
//             entry.addClass("burger-unavail")
//         };

//         entry.append("<h4><strong>Burger:</strong></h4>");
//         entry.append("<p>" + data[i].burger_name + "</p>");
//         }
//     }
// })


module.exports = act;
// Link to connection file
var connection = require('./connection');

var orm = {
    selectAll: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function () { },
    updateOne: function () { }
};

module.exports = orm;
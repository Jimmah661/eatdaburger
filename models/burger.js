var orm = require('../config/orm');

// Format is function()

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function () {
        orm.insertOne();
    },
    update: function () {
        orm.updateOne();
    }
}
var Stylist = require('../services/stylistservice');
var config = require('../config');
var async = require('async');

exports.list = (req, res, next) => {
    var query = {};
    async.series({
        list: (cb) => {
            Stylist.getAllStylist(query, (rows) => {
                cb(null, rows[0])
            });
        }
    }, (err, ret) => {
        var data = {
            status: "success",
            list: ret.list,
        };
        console.log("json ");
        res.json(data);
    });

};

exports.update = (req, res, next) => {
    var query = {};
    query.stylist_id = req.body.salon_id;
    query.name = req.body.name;
    query.location = req.body.location;
    query.number = req.body.number;
    Stylist.modStylist(query, (ret) => {
        if (ret.length >= 0) res.json({
            status: "update success"
        });
    });
};

exports.add = (req, res, next) => {
    var query = {};
    query.name = req.body.name;
    query.location = req.body.location;
    query.number = req.body.number;
    query.experiance = req.body.experiance;
    Stylist.addStylist(query, (ret) => {
        if (ret) res.json({
            status: "success",
            stylistId: ret.id
        })
    });
}



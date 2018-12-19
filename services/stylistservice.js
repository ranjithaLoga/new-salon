//var models=require('../Models');
var sequelize = require('../common/mysql');
//var Salon=models.Salon;
var Stylist = require('../Models/stylist');



exports.getAllStylist = (query, cb) => {
    var statement = "SELECT * FROM stylists";

    sequelize.query(statement).then((data) => {
        cb(data);
    });
};

/*exports.addStylist=(query,cb)=>{
    var queryObj = {};
    queryObj.name = query.name;
    queryObj.location = query.location;
    queryObj.number = query.number;
    queryObj.experiance = query.experiance;

    var statement= "INSERT INTO `stylists` (`id`, `name`, `location`, `number`, `experiance`) VALUES ('3', 'john', 'col', '0111', '4');";

    sequelize.query(statement).then((data)=>{
        cb(data);
    });
}
*/


exports.modStylist = (query, cb) => {
    var queryObj = {};
    stylistId = query.Stylist_Id;
    queryObj.name = query.name;
    queryObj.location = query.location;
    queryObj.number = query.number;
    Stylist.update(queryObj, {
        where: {
            id: stylistId
        }
    }).then((data) => {
        cb(data);
    });
};

exports.addStylist = (query, cb) => {
    var queryObj = {};
    queryObj.name = query.name;
    queryObj.location = query.location;
    queryObj.number = query.number;
    queryObj.experiance = query.experiance;

    Stylist.create(queryObj).then((data) => {
        console.log(data.dataValues);
        cb(data.dataValues);
    }).catch((err) => {
        cb(err);
    })
};

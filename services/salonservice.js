//var models=require('../Models');
var sequelize = require('../common/mysql');
//var Salon=models.Salon;
var Salon = require('../Models/salon');

exports.getAllSalon = (query, cb) => {
    var statement = "SELECT * FROM salons";

    sequelize.query(statement).then((data) => {
        cb(data);
    });
};

exports.modSalon=(query,cb) =>{
    var queryObj={};
    salonId=query.Salon_Id;
    queryObj.name=query.name;
    queryObj.location=query.location;
    Salon.update(queryObj,{
        where:{
            id:salonId
        }
    }). then((data)=>{
        cb(data);
    });
};




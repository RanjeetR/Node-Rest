/**
 * Created by user on 3/1/2015.
 */
var datasave = require("../models/savedb");
module.exports.savedata = function(req,res){

    var ds = new datasave(req.body);
    console.log(req.body);
    ds.save(function(err , result){
        console.log("server controller ",err , result);
        res.json(result);
    });
}
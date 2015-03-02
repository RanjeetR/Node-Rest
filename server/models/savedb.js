/**
 * Created by user on 3/1/2015.
 */
var mongoose = require("mongoose");
module.exports = mongoose.model("savedb",{

        fruitname:String,
        fruitcolor:String
});
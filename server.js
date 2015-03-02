/**
 * Created by Ranjeet R Hange on 3/1/2015.
 */
console.log("HEllo from Node");
var express            = require("express"),
    app                = express(),
    bodyparser         = require("body-parser"),
    mongoose           = require("mongoose"),
    savedataController = require("./server/controllers/savedataController");

mongoose.connect("mongodb://localhost:27017/node-restful");
app.use(bodyparser());

app.get("/",function(req,res){
res.sendFile( __dirname+'/client/view/index.html' );
});
app.use("/js",express.static(__dirname+'/client/js'));

app.post('/api/fruits', savedataController.savedata);

app.listen(3000,function(){
    console.log("Server is listening to ");
});

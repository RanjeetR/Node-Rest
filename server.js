/**
 * Created by Ranjeet R Hange on 3/1/2015.
 */
console.log("HEllo from Node");
var express = require("express"),
    app     = express();
app.get("/",function(req,res){
res.sendFile( __dirname+'/client/view/index.html' );
});
app.use("/js",express.static(__dirname+'/client/js'));
app.listen(3000,function(){
    console.log("Server is listening to ");
});

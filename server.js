var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.connect('mongodb://localhost/simple')

var weekSchema = {
    id:String,
    firstDay:String
}

var Week = mongoose.model('Week', weekSchema, 'weeks')

var app = express();
app.use(cors());

app.get('/weeks', function (req, res) {
    Week.find(function (err, doc) {
        res.send(doc);
    })
})

app.listen(3000);
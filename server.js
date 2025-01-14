// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
//trying to make static port
var port = process.env.PORT || 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:date?", function (req, res) {
  let timeStamp = req.params.date;
  console.log(timeStamp)
  if(!timeStamp) timeStamp = new Date().getTime() 
  // checking if timeStamp is numbers or 2015-12-15
  timeStamp.length >= 12 ? timeStamp=parseInt(timeStamp) : null ;

  let calculatedDate = new Date(timeStamp);
  if (calculatedDate == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    let utcDate = calculatedDate.toUTCString();
    let message = { unix: calculatedDate.getTime(), utc: utcDate };
    res.json(message);
  }
});


// listen for requests :)
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

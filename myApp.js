var express = require("express");
var app = express();

// let absolutePath = __dirname + "/";

app.use("/", express.static(__dirname + "/"))

console.log(new Date(Date.UTC(0)))
app.get("/api/timestamp", (req, res) => {
  res.json({ unix: new Date.now(), utc: new Date() });
});

app.get("/api/timestamp/:date_string", (req, res) => {
  let dateString = req.params.date_string;

  if (/\d{5,}/.test(dateString)) {
    const dateInt = parseInt(dateString);

    res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
  } else {
    let dateObject = new Date(dateString);

    if (dateObject.toString() === "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
    }
  }
});

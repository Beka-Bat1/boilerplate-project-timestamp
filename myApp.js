

// app.get("/api/timestamp/:date_string", (req, res) => {
//   let dateString = req.params.date_string;

//   if (/\d{5,}/.test(dateString)) {
//     const dateInt = parseInt(dateString);

//     res.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
//   } else {
//     let dateObject = new Date(dateString);

//     if (dateObject.toString() === "Invalid Date") {
//       res.json({ error: "Invalid Date" });
//     } else {
//       res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
//     }
//   }
// });

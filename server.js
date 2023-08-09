let express = require("express");
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.render("index.html");
});
app.get("/addTwoNumbers", (req, res) => {
  let num1 = 6;
  let num2 = 10;
  let sum = num1 + num2;
  let obj = { statusCode: 200, mesage: "success", data: sum };
  res.json(obj);
});

app.listen(3000, () => {
  console.log("server started");
});

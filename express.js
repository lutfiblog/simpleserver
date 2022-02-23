const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
app.use(express.json());

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_express_mysql",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Koneksi Berhasil!");
  }
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/data", function (req, res) {
  //query
  connection.query(
    "SELECT * FROM datas ORDER BY id desc",
    function (err, rows) {
      if (err) {
        console.log("Ooop datanya eror........");
      } else {
        console.log(rows);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

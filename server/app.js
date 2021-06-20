const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
});
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  passowrd: "password",
  database: "gym",
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sqlInsert =
    "INSERT INTO customers ( name, email, password) VALUES (?,?,?)";
  db.query(sqlInsert, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ error: "Error from serwer" });
    }
    if (result) {
      res.send({ success: "Zapisano" });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM customers WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ error: "Error from serwer" });
      }

      if (result.length > 0) {
        res.send(result);
        console.log(result);
      } else {
        res.status(400).send({ message: "Zly email lub haslo" });
        console.log(result);
      }
    }
  );
});

app.post("/purchase", (req, res) => {
  const { id_customer, id_product } = req.body;
  const sqlInsert =
    "INSERT INTO purchases ( id_customer, id_product) VALUES (?,?)";
  db.query(sqlInsert, [id_customer, id_product], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ error: "Error from serwer" });
    }
    if (result) {
      res.send({ success: "Zapisano" });
    }
  });
});

app.listen(3001, () => {
  console.log("runing on port 3001");
});

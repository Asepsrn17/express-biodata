import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
  console.log(`Request method ${req.method} With Url path ${req.url}`);
  next();
});

let data = {};

app.post("/biodata", (req, res) => {
  const name = req.query.nama;
  const placeBirth = req.query["tempat-lahir"];
  const dateBirth = req.query["tanggal-lahir"];
  const address = req.query.alamat;

  res.send({
    nama: name,
    "tempat-lahir": placeBirth,
    "tanggal-lahir": dateBirth,
    alamat: address,
  });

  data = { name, placeBirth, dateBirth, address };
});

app.get("/biodata", (req, res) => {
  res.send({
    nama: data.name,
    "tempat-lahir": data.placeBirth,
    "tanggal-lahir": data.dateBirth,
    alamat: data.address,
  });
});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);

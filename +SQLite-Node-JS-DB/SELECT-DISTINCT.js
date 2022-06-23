//отобразить что находится в базе node SELECT.js id
//SELECT DISTINCT ean,MIN(price),MAX(price)
const sqlite3 = require("sqlite3").verbose();
//обращение к db
const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log("соединение успешно \n connecion successful");
});

const sql = `SELECT DISTINCT ean,MIN(price),MAX(price) FROM data`;

db.all(sql, [], (err, rows) => {
  if (err) return console.error(err.massage);

  rows.forEach((row) => {
    console.log(row);
  });
});

db.close((err) => {
  if (err) return console.error(err.massage);
});

//node SELECT-DISTINCT.js

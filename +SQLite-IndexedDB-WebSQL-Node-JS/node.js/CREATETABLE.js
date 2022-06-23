//создание структуры
//CREATE TABLE data(time, EAN, INN, price, tele, id)
const sqlite3 = require("sqlite3").verbose();
//обращение к db
const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log("соединение успешно \n connecion successful");
});

//создание структуры
db.run(`CREATE TABLE data(time, EAN, INN, price, tele, id)`);

db.close((err) => {
  if (err) return console.error(err.message);
});

//node CREATETABLE.js

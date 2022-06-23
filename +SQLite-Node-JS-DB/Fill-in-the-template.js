//заполняет шаблон по data (time, EAN, INN, price, tele, id)
//[Date.now(), "4620021162899", "3327850121", "2900", "89206245013", 2]
const sqlite3 = require("sqlite3").verbose();
//обращение к db
const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);

  console.log("соединение успешно (connecion successful)");
});

// создание структуры
// db.run("CREATE TABLE data(time, EAN, INN, price, tele, id)");

// запись в структуру
const sql = `INSERT INTO data (time, EAN, INN, price, tele, id)
              VALUES(?,?,?,?,?,?)`;

// данные
db.run(
  sql,
  [Date.now(), "4620021162899", "3327850121", "2900", "89206245013", 2],
  (err) => {
    if (err) return console.error(err.message);

    console.log("Была создана новая строка \n A new row has been created");
  }
);

db.close((err) => {
  if (err) return console.error(err.message);
});

//для использования
//node Fill-in-the-template.js

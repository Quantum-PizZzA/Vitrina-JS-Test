// Это работает на всех устройствах / браузерах и использует IndexedDBShim в качестве последнего запасного варианта
n = 1;
console.log(n++, "Проверка браузера");
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

// Открыта (или создана) база данных
console.log(n++, "Открытие создание базы");
const request = indexedDB.open("CarsDatabase", 1);

request.onerror = function (event) {
  console.log(n++, "Обработка ошибки");
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

// Создана схема при создании и обновлении версии
request.onupgradeneeded = function () {
  console.log(n++, "Создание базы");
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_colour", ["colour"], { unique: false });
  store.createIndex("colour_and_make", ["colour", "make"], {
    unique: false
  });
};

request.onsuccess = function () {
  console.log(n++, "База данных успешно открыта");

  const db = request.result;
  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");
  const colourIndex = store.index("cars_colour");
  const makeModelIndex = store.index("colour_and_make");

  // Добавленые некоторые данные
  console.log(n++, "Запись данных");
  store.put({ id: 1, colour: "Красный", make: "Toyota" });
  store.put({ id: 2, colour: "Красный", make: "Kia" });
  store.put({ id: 3, colour: "Синий", make: "Honda" });
  store.put({ id: 4, colour: "Красный", make: "Mitsubishi" });
  store.put({ id: 5, colour: "Золото", make: "BMW" });
  store.put({ id: 6, colour: "Серебро", make: "Mercedes" });

  // Запрос по идентификатору
  const idQuery = store.get(4);
  idQuery.onsuccess = function () {
    console.log("запрос идентификатора", idQuery.result);
  };

  // Запрос цвета Красный
  const colourQuery = colourIndex.getAll(["Красный"]);
  colourQuery.onsuccess = function () {
    console.log("запрос цвета", colourQuery.result);
  };

  // Запрос "Синий", "Honda"
  const colourMakeQuery = makeModelIndex.get(["Синий", "Honda"]);
  colourMakeQuery.onsuccess = function () {
    console.log("запрос на создание цвета", colourMakeQuery.result);
  };

  // Удалить id 1
  const deleteCar = store.delete(1);
  deleteCar.onsuccess = function () {
    console.log("Красная Toyota была удалена");
  };

  // Удалить синие машины
  const redCarKey = colourIndex.getKey(["Синий"]);
  redCarKey.onsuccess = function () {
    const deleteCar = store.delete(redCarKey.result);

    deleteCar.onsuccess = function () {
      console.log("машина была удалена");
    };
  };

  const subaru = store.get(4);

  subaru.onsuccess = function () {
    subaru.result.colour = "Зеленый";
    store.put(subaru.result);
  };

  transaction.oncomplete = function () {
    db.close();
  };
};

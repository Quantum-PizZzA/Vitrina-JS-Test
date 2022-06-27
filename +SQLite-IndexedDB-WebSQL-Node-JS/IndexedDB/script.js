// This works on all devices/browsers, and uses IndexedDBShim as a final fallback
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

// Open (or create) the database
const request = indexedDB.open("CarsDatabase", 1);

request.onerror = function (event) {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

// Create the schema on create and version upgrade
request.onupgradeneeded = function () {
  const db = request.result;
  const store = db.createObjectStore("cars", { keyPath: "id" });
  store.createIndex("cars_colour", ["colour"], { unique: false });
  store.createIndex("colour_and_make", ["colour", "make"], {
    unique: false
  });
};

request.onsuccess = function () {
  console.log("База данных успешно открыта");

  const db = request.result;
  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");
  const colourIndex = store.index("cars_colour");
  const makeModelIndex = store.index("colour_and_make");

  // Add some data
  store.put({ id: 1, colour: "Красный", make: "Toyota" });
  store.put({ id: 2, colour: "Красный", make: "Kia" });
  store.put({ id: 3, colour: "Синий", make: "Honda" });
  store.put({ id: 4, colour: "Серебро", make: "Subaru" });

  // Query the data
  const idQuery = store.get(4);
  const colourQuery = colourIndex.getAll(["Red"]);
  const colourMakeQuery = makeModelIndex.get(["Blue", "Honda"]);

  idQuery.onsuccess = function () {
    console.log("запрос идентификатора", idQuery.result);
  };

  colourQuery.onsuccess = function () {
    console.log("запрос цвета", colourQuery.result);
  };

  colourMakeQuery.onsuccess = function () {
    console.log("запрос на создание цвета", colourMakeQuery.result);
  };

  const deleteCar = store.delete(1);

  deleteCar.onsuccess = function () {
    console.log("Красная Toyota была удалена");
  };

  const redCarKey = colourIndex.getKey(["Красный"]);

  redCarKey.onsuccess = function () {
    const deleteCar = store.delete(redCarKey.result);

    deleteCar.onsuccess = function () {
      console.log("Красная машина была удалена");
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

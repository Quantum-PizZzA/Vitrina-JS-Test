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
  store.put({ id: 4, colour: "Красный", make: "Mitsubishi" });
  store.put({ id: 5, colour: "Золото", make: "BMW" });
  store.put({ id: 6, colour: "Серебро", make: "Mercedes" });

  //запрос по идентификатору
document.querySelector("#i_id4").addEventListener("click", function Text() {
  db();
  const idQuery = store.get(4);
  idQuery.onsuccess = function () {
    console.log("запрос идентификатора", idQuery.result);
  };
});

//запрос цвета Красный
document.querySelector("#c_red").addEventListener("click", function Text() {
  const colourQuery = colourIndex.getAll(["Красный"]);
  colourQuery.onsuccess = function () {
    console.log("запрос цвета", colourQuery.result);
  };
});

//запрос "Синий", "Honda"
document.querySelector("#i_b_h").addEventListener("click", function Text() {
  const colourMakeQuery = makeModelIndex.get(["Синий", "Honda"]);
  colourMakeQuery.onsuccess = function () {
    console.log("запрос на создание цвета", colourMakeQuery.result);
  };
});

//удалить id 1
document.querySelector("#d_id1").addEventListener("click", function Text() {
  const deleteCar = store.delete(1);
  deleteCar.onsuccess = function () {
    console.log("Красная Toyota была удалена");
  };
});

//удалить синие машины
document.querySelector("#d_b_c").addEventListener("click", function Text() {
  const redCarKey = colourIndex.getKey(["Синий"]);
  redCarKey.onsuccess = function () {
    const deleteCar = store.delete(redCarKey.result);

    deleteCar.onsuccess = function () {
      console.log("машина была удалена");
    };
  };
});

//subaru Зеленый???
document.querySelector("#s_").addEventListener("click", function Text() {
  const subaru = store.get(4);
  subaru.onsuccess = function () {
    subaru.result.colour = "Зеленый";
    store.put(subaru.result);
  };
});

transaction.oncomplete = function () {
  db.close();
};

function ReadFileJSON() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    obj = JSON.parse(reader.result);

    console.log(reader.result);
    console.log(reader);
    console.log(obj);

    for (key in obj) {
      console.log(key, obj[key]);
      /* ... делать что-то с obj[key] ... */
    }

    // console.log(obj[1658125448586].INN);

    // localStorage.setItem("key", obj);
  };
}

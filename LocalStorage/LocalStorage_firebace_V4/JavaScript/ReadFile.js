function ReadFileJSON() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    // console.log(reader.result);
    obj = JSON.parse(reader.result);
    // console.log(obj);

    for (key in obj) {
      console.log(key, obj[key]);
      localStorage.setItem(
        key,
        obj[key].EAN +
          " " +
          obj[key].INN +
          " " +
          obj[key].Price +
          " " +
          obj[key].Name
      );
    }
  };
}

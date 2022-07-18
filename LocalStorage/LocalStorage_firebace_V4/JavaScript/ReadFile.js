function ReadFileJSON() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    obj = JSON.parse(reader.result);

    for (key in obj) {
      // console.log(key, obj[key]);
      localStorage.setItem(key, JSON.stringify(obj[key]));
    }
  };
}

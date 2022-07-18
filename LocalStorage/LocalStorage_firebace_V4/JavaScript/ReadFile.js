function ReadFile() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  Arr = [];
  lines = [];
  linesValue = [];

  reader.onload = function () {
    let lines = reader.result.split(";");

    // console.log(lines);

    for (i = 0; i < lines.length; i++) {
      Arr = lines[i].split(":");

      linesValue.key = Arr[0];
      linesValue.ean = Arr[1];
      linesValue.inn = Arr[2];
      linesValue.price = Arr[3];
      linesValue.name = Arr[4];

      if (
        linesValue.key != "" &&
        linesValue.key != " " &&
        linesValue.key != "\n" &&
        linesValue.key != "\t"
      ) {
        localStorage.setItem(
          linesValue.key,
          linesValue.ean +
            " " +
            linesValue.inn +
            " " +
            linesValue.price +
            " " +
            linesValue.name
        );
        console.log("Загружено:", linesValue);
      }
    }
  };
}

function ReadFileJSON() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    obj = JSON.parse(reader.result);

    // reader.result = reader.result.replace(/(\r\n|\n|\r)/gm, "");

    console.log(reader.result);
    console.log(reader);
    console.log(obj[1658125448586]);
    console.log(obj[1658125448586].INN);

    // localStorage.setItem("key", obj);
  };
}

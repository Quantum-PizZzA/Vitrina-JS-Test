let disSearch = " \n";

function Search() {
  console.log("function Search active");

  valueSearch = document.getElementById("box").value.toUpperCase();

  numbSearch = 0;
  disSearch = "";

  for (let i = 0; i < localStorage.length && numbSearch < 20; i++) {
    let array = localStorage.getItem(localStorage.key(i));

    if (array.toUpperCase().indexOf(valueSearch) > -1) {
      renferfind = localStorage.getItem(localStorage.key(i));

      let arr = renferfind.split(" ");

      let ean = arr[0];
      let inn = arr[1];
      let price = arr[2];
      let name = arr[3];

      valueJSON = {
        EAN: ean,
        INN: inn,
        Price: price,
        Name: name,
      };

      numbSearch++;

      if (valueJSON.EAN == undefined) valueJSON.EAN = "";
      if (valueJSON.INN == undefined) valueJSON.INN = "";
      if (valueJSON.Price == undefined) valueJSON.Price = "";
      if (valueJSON.Name == undefined) valueJSON.Name = "";

      disSearch +=
        "\n\t" +
        numbSearch +
        "\t EAN: " +
        valueJSON.EAN +
        "\t INN: " +
        valueJSON.INN +
        "\t Price: " +
        valueJSON.Price +
        "\t Name: " +
        valueJSON.Name;
    }
  }

  if (numbSearch == 0) disSearch = "\t" + "Ничего не найдено" + "\n";

  if (valueSearch == "" || valueSearch == " ") disSearch = "";
  document.getElementById("disSearch").innerHTML = disSearch;
  // document.getElementById("localStorage.length").innerHTML =
  //   localStorage.length;
}

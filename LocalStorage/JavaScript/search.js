let disSearch = " \n";

function Search() {
  valueSearch = document.getElementById("box").value.toUpperCase();

  console.log("function Search");

  numbSearch = 0;
  disSearch = "";
  //   "\t" +
  //   "№" +
  //   "\t" +
  //   "Ключ" +
  //   "\t" +
  //   "EAN" +
  //   "\t" +
  //   "INN" +
  //   "\t" +
  //   "Цена" +
  //   "\t" +
  //   "Название" +
  //   "\n";

  for (let i = 0; i < localStorage.length && numbSearch < 20; i++) {
    let array = localStorage.getItem(localStorage.key(i));

    if (array.toUpperCase().indexOf(valueSearch) > -1) {
      PasureJSON = JSON.parse(localStorage.getItem(localStorage.key(i)));
      numbSearch++;

      if (PasureJSON.EAN == undefined) PasureJSON.EAN = "";
      if (PasureJSON.INN == undefined) PasureJSON.INN = "";
      if (PasureJSON.Price == undefined) PasureJSON.Price = "";
      if (PasureJSON.Name == undefined) PasureJSON.Name = "";

      disSearch +=
        "\t" +
        numbSearch +
        //".\t" +
        //localStorage.key(i) +
        "\t EAN: " +
        PasureJSON.EAN +
        "\t INN: " +
        PasureJSON.INN +
        "\t Цена: " +
        PasureJSON.Price +
        "\t Название: " +
        PasureJSON.Name +
        "\n";
    } else {
      // disSearch = "\t" + "Ничего не найдено";
    }
  }

  if (numbSearch == 0) disSearch = "\t" + "Ничего не найдено" + "\n";

  // document.getElementById("numbSearch").innerHTML = numbSearch;
  if (valueSearch == "" || valueSearch == " ") disSearch = "";
  document.getElementById("disSearch").innerHTML = disSearch;
}

let disSearch = " \n";

function Search() {
  // box = document.getElementById("box").value.toUpperCase();

  // console.log("function Search");

  numbSearch = 0;
  disSearch = "";

  for (let i = 0; i < localStorage.length && numbSearch < 20; i++) {
    let array = localStorage.getItem(localStorage.key(i));
    let arr4j = array.split(" ");

    let ean = arr4j[0];
    let inn = arr4j[1];
    let price = arr4j[2];
    let name = arr4j[3];

    valueJSON = {
      EAN: ean,
      INN: inn,
      Price: price,
      Name: name,
      Date: Date.now()
    };

    console.log(valueJSON);

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
  document.getElementById("localStorage.length").innerHTML =
    localStorage.length;
}

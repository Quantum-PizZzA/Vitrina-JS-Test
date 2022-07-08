let disSearch = " \n";

function Search() {
  valueSearch = document.getElementById("box").value.toUpperCase();

  console.log("function Search");

  numbSearch = 0;
  disSearch = "";

  for (let i = 0; i < localStorage.length && numbSearch < 20; i++) {
    let array = localStorage.getItem(localStorage.key(i));

    if (array.toUpperCase().indexOf(valueSearch) > -1) {
      numbSearch++;

      disSearch +=
        "\t" +
        numbSearch +
        "\t" +
        localStorage.key(i) +
        "\t" +
        localStorage.getItem(localStorage.key(i)) +
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

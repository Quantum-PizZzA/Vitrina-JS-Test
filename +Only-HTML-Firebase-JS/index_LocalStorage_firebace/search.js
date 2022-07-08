let disSearch = " \n";

function Search() {
  valueSearch = document.getElementById("filterInput").value;
  // document.getElementById("filterValue").innerHTML = filterValue;

  console.log("function Search");

  numbSearch = 0;
  disSearch = "";

  for (let i = 0; i < localStorage.length && numbSearch < 10; i++) {
    let array = localStorage.getItem(localStorage.key(i));

    if (array.indexOf(valueSearch) > -1) {
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
  document.getElementById("disSearch").innerHTML = disSearch;
}

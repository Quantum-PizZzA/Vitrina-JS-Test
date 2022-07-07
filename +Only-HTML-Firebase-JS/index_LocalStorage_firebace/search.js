let disSearch = " \n";

// console.log(/'\d*'/.test("abcde"));
// console.log(/'\d*'/.test("abcde"));

function Search() {
  valueSearch = document.getElementById("boxsearch").value;
  disSearch = "\t" + "Ничего не найдено";
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == valueSearch) {
      let key = localStorage.key(i);

      disSearch =
        "\t" +
        localStorage.key(i) +
        "\t" +
        localStorage.getItem(localStorage.key(i)) +
        "\n";
    }
  }
  document.getElementById("disSearch").innerHTML = disSearch;
}

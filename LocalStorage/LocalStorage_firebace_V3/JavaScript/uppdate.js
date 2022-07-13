let displayInPre = " \n";

function UppDate() {
  numb = 0;
  displayInPre = "";

  if (localStorage.length == 0) {
    displayInPre = "нет данных";
  } else {
    for (
      let i = localStorage.length - 1;
      i > localStorage.length - 20 - 1;
      i--
    ) {
      let key = localStorage.key(i);
      numb++;

      displayInPre +=
        "\t" +
        numb +
        "\t" +
        localStorage.key(i) +
        "\t" +
        localStorage.getItem(localStorage.key(i)) +
        "\n";
    }
  }

  // {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);

  //     displayInPre +=
  //       localStorage.key(i) +
  //       "\t" +
  //       localStorage.getItem(localStorage.key(i)) +
  //       "\n";
  //   }
  // }

  // вывод 20 элементов
  document.getElementById("displayInPre").innerHTML = displayInPre;
  // количества ls
  document.getElementById("localStorage.length").innerHTML =
    localStorage.length;
}

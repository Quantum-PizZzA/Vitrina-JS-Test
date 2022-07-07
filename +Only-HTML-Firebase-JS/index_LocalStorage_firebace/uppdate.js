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
  document.getElementById("localStorage.length").innerHTML =
    localStorage.length;
  document.getElementById("displayInPre").innerHTML = displayInPre;
}

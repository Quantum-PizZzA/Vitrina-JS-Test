let displayInPre = " \n";

function UppDate() {
  displayInPre = "";

  if (localStorage.length == 0) {
    displayInPre = "нет данных";
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);

      displayInPre +=
        localStorage.key(i) +
        "\t" +
        localStorage.getItem(localStorage.key(i)) +
        "\n";
    }
  }
  document.getElementById("displayInPre").innerHTML = displayInPre;
}

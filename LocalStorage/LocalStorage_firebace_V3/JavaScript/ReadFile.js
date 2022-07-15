function ReadFile() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    testJSON = JSON.parse(reader.result);
    console.log(`Добавленный файл: \n${testJSON}`);
  };
}

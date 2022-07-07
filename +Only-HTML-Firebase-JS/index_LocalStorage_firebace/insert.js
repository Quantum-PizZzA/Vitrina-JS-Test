function Insert() {
  box = document.getElementById("box").value;

  let arr = box.split(" ");
  //console.log(arr);

  var ean = arr[0];
  var inn = arr[1];
  var price = arr[2];
  var name = arr[3];

  valueJSON = {
    EAN: ean,
    INN: inn,
    Price: price,
    Name: name,
    Date: Date.now()
  };

  hashCode = ean;
  dbchek = "нет данных в БД";

  console.log(`${dbchek} = [${hashCode}]`);

  if (dbchek == "нет данных в БД") {
    console.log(`запись в localStorage = ${hashCode}`);
    // localStorage.setItem(new Date(), JSON.stringify(valueJSON));
    localStorage.setItem(Date.now(), JSON.stringify(valueJSON));
  }
}

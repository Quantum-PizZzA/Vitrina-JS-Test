function Insert() {
  box = document.getElementById("box").value;

  let arr = box.split(" ");
  //console.log(arr);

  var ean = arr[0];
  var inn = arr[1];
  var price = arr[2];
  var name = arr[3];

  J = {
    EAN: ean,
    INN: inn,
    Price: price,
    Name: name
  };

  hashCode = ean;
  dbchek = "нет данных в БД";

  console.log(`${dbchek} = [${hashCode}]`);

  if (dbchek == "нет данных в БД") {
    console.log(`запись в localStorage = ${hashCode}`);
    localStorage.setItem(ean, JSON.stringify(J));
  }

  UppDate();
}

function Insert() {
  box = document.getElementById("box").value;

  let arr = box.split(" ");
  console.log(arr[0]);

  var ean = arr[0];
  var inn = arr[1];
  var price = arr[2];
  var name = arr[3];

  valueJSON = {
    EAN: ean,
    INN: inn,
    Price: price,
    Name: name,
    Date: Date.now(),
    Date2: new Date()
  };

  dbchek = "нет данных в БД";

  // console.log(`${dbchek} = [${Date.now()}]`);

  if (dbchek == "нет данных в БД") {
    // console.log(`запись в localStorage = ${Date.now()}`);
    localStorage.setItem(Date.now(), JSON.stringify(valueJSON));
  }
}

// localStorage.setItem(new Date(), JSON.stringify(valueJSON));

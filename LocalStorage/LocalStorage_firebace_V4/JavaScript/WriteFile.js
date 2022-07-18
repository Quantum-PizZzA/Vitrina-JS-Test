function WriteFileJSON() {
  arrayFile = "";
  obj = {};
  for (let i = 0; i < localStorage.length; i++) {
    renferfind = localStorage.getItem(localStorage.key(i));
    let arr = renferfind.split(" ");

    let ean = arr[0];
    let inn = arr[1];
    let price = arr[2];
    let name = arr[3];

    valueJSON = {
      EAN: ean,
      INN: inn,
      Price: price,
      Name: name
    };
    obj[localStorage.key(i)] = valueJSON;
  }

  console.log(JSON.stringify(obj));
  save =
    "<a download='localStorage.json' href='data:application/octet-stream;UTF-8," +
    JSON.stringify(obj) +
    " '>download localStorage.json</a>";
  document.write(save);
}

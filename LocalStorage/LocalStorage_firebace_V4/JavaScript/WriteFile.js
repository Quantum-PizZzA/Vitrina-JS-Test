function WriteFile() {
  arrayFile = "";
  for (let i = 0; i < localStorage.length; i++) {
    renferfind = localStorage.getItem(localStorage.key(i));
    let arr = renferfind.split(" ");

    let ean = arr[0];
    let inn = arr[1];
    let price = arr[2];
    let name = arr[3];

    arrayFile +=
      localStorage.key(i) +
      ";" +
      ean +
      ";" +
      inn +
      ";" +
      price +
      ";" +
      name +
      "\r\n";
  }

  save =
    "<a download='localStorage.txt' href='data:application/octet-stream;UTF-8," +
    arrayFile +
    "'>download localStorage.txt</a>";
  document.write(save);
}

function WriteFileJSON() {
  arrayFile = "";
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

    arrayFile +=
      '"' + localStorage.key(i) + '":' + JSON.stringify(valueJSON) + ",";
  }

  save =
    "<a download='localStorage.json' href='data:application/octet-stream;UTF-8,{" +
    arrayFile +
    "} '>download localStorage.json</a>";
  document.write(save);
}

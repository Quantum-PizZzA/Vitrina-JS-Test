function Insert() {
  box = document.getElementById("box").value;

  let arr = box.split(" ");

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
    // Date2: new Date()
  };

  localStorage.setItem(Date.now(), JSON.stringify(valueJSON));
}

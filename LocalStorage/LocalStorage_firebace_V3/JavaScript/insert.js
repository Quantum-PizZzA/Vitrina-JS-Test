function Insert() {
  box = document.getElementById("box").value;

  // let arr4j = box.split(" ");

  // var ean = arr4j[0];
  // var inn = arr4j[1];
  // var price = arr4j[2];
  // var name = arr4j[3];

  // valueJSON = {
  //   EAN: ean,
  //   INN: inn,
  //   Price: price,
  //   Name: name,
  //   Date: Date.now()
  //   // Date2: new Date()
  // };

  // localStorage.setItem(Date.now(), JSON.stringify(valueJSON));
  localStorage.setItem(Date.now(), box);
}

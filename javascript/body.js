function body(massString) {
  let vid = " \n";

  //URL
  const myUrl = new URL(window.location.href);
  console.log(myUrl.href);
  console.log(myUrl);
  // myUrl.hash = massString;
  console.log(myUrl.hash);
  hash = myUrl.hash;
  hash = hash.split("#").join("");
  console.log(Number(hash));

  //запись в localStorage
  localStorage.setItem(Number(hash), hash);

  // for (let i = 0; i < massString.length; i++) {
  //   if (barcode(massString[i]) == true) {
  //     vid =
  //       vid +
  //       " Данные: " +
  //       massString[i].trim() +
  //       " ИНН: " +
  //       checkInn(massString[i].trim()) +
  //       " Штрих код: " +
  //       barcode(massString[i].trim()) +
  //       " \n";
  //   }
  // }

  // console.log(vid);

  let sum = 0;
  let exactNumbers = 0;
  let massNumber = [];
  let massEnter = [];

  // Сумма
  for (
    let i = 0;
    i < massString.length.toString() &&
    massString[i] != "NaN" &&
    massString[i] != "\r" &&
    massString[i] != "";
    i++, exactNumbers++
  ) {
    sum = sum + Number(massString[i]);
    massNumber[i] = Number(massString[i]);
    massEnter[i] = massNumber[i];
  }

  document.getElementById("sum").innerHTML = sum;
  // document.getElementById("vid").innerHTML = vid;

  //localStorage
  //проход по localStorage
  // dbchek = "нет данных в БД";

  // for (let i = 0; i < localStorage.length; i++) {
  //   let key = localStorage.key(i);

  //   if (key == hashCode && dbchek == "нет данных в БД") {
  //     dbchek = "данные уже в базе";
  //   }
  // }

  // if (dbchek == "нет данных в БД") {
  //   //запись в localStorage
  //   localStorage.setItem(hashCode, massEnter);
  //   localStorage.setItem(-hashCode, sum);
  // }
}

function body(value) {
  let vid = " \n";

  //Время выполнения запуск
  var time = performance.now();

  for (let i = 0; i < value.length; i++) {
    if (barcode(value[i]) == true) {
      vid = vid + value[i].trim() + money + " \n";
    }
  }

  console.log(vid);

  let sum = 0;
  let exactNumbers = 0;
  let massNumber = [];
  let massEnter = [];

  // Сумма
  for (
    let i = 0;
    i < value.length.toString() &&
    value[i] != "NaN" &&
    value[i] != "\r" &&
    value[i] != "";
    i++, exactNumbers++
  ) {
    sum = sum + Number(value[i]);
    massNumber[i] = Number(value[i]);
    massEnter[i] = massNumber[i];
  }

  // Функция сортировки
  function sIncrease(i, ii) {
    // По возрастанию
    if (i > ii) return 1;
    else if (i < ii) return -1;
    else return 0;
  }
  massNumber.sort(sIncrease);

  // Гененраци hashCode
  function hashCodeGen(str) {
    return str
      .split("")
      .reduce(
        (prevHash, currVal) =>
          ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
        0
      );
  }

  document.getElementById("sum").innerHTML = sum;
  document.getElementById("exactNumbers").innerHTML = exactNumbers;
  // document.getElementById("Hash").innerHTML = Hash;
  document.getElementById("hashCodeGen").innerHTML = hashCode;
  document.getElementById("vid").innerHTML = vid;

  // console.log(dbchek);
  if (dbchek == "нет данных в БД") {
    // console.log(`запись в localStorage = ${hashCode}`);
    //запись в localStorage
    localStorage.setItem(hashCode, massEnter);
    localStorage.setItem(-hashCode, sum);
  }
}

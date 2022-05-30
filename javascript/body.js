function body(massString) {
  let vid = " \n";

  for (let i = 0; i < massString.length; i++) {
    vid =
      vid +
      //" Данные: " +
      massString[i].trim() +
      " ИНН: " +
      checkInn(massString[i].trim()) +
      " Штрих код: " +
      barcode(massString[i]) +
      " \n";
  }


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

  //построение Hash
  Hash = "" + exactNumbers;

  for (let i = 0; i < massNumber.sort(sIncrease).length; i++) {
    Hash = Hash + massNumber.sort(sIncrease)[i];
  }

  hashCode = Math.abs(hashCodeGen(Hash));

  // console.log(`Добавленный файл: \n${reader.result}`);
  console.log("Сумма = ", sum);
  // console.log("Матрица massString = ", massString);
  // console.log("Матрица massNumber = ", massNumber);
  // console.log("Сортировка = ", massNumber.sort(sIncrease));
  console.log("Точное количество чисел = ", exactNumbers);
  console.log(`Штрих код от [${Hash}] = ${hashCodeGen(Hash)}`);

  document.getElementById("sum").innerHTML = sum;
  document.getElementById("exactNumbers").innerHTML = exactNumbers;
  document.getElementById("Hash").innerHTML = Hash;
  document.getElementById("hashCodeGen").innerHTML = hashCode;
  document.getElementById("vid").innerHTML = vid;

  //проход по localStorage

  dbchek = "нет данных в БД";

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key == hashCode && dbchek == "нет данных в БД") {
      console.log(`! ${i} ключ найден ${key} = ${hashCode}`);
      dbchek = "данные уже в базе";
    }
  }

  document.getElementById("dbchek").innerHTML = dbchek;

  console.log(dbchek);
  if (dbchek == "нет данных в БД") {
    console.log(`запись в localStorage = ${hashCode}`);
    //запись в localStorage
    localStorage.setItem(hashCode, massEnter);
    localStorage.setItem(-hashCode, sum);
  }
}

// reader.onerror = function () {
//   console.log(reader.error);
// };

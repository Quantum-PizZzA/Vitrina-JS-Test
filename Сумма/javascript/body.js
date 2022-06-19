function body(massString) {

  //Время выполнения запуск
  var time = performance.now();

  console.log(vid);

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
  
  //Время выполнения
  time = performance.now() - time;
  console.log('Время выполнения = ', time/1000, "сек");
  time = 0;
  
}


function body(massString) {
  let vid = " \n";

  //Время выполнения запуск
  var time = performance.now();

  for (let i = 0; i < massString.length; i++) {
    
    if (barcode(massString[i]) == true){

      
      vid =
      vid +
      //" Данные: " +
      massString[i].trim() +

      // " Штрих код: " +
      // barcode(massString[i].trim()) +
      " \n";
    }
  }


  console.log(vid);

  document.getElementById("vid").innerHTML = vid;

  //Время выполнения
  time = performance.now() - time;
  console.log('Время выполнения = ', time/1000, "сек");
  time = 0;




}



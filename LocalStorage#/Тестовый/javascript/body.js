function body(massString) {
  let sum = 0;

  for (let i = 0; i < localStorage.length; i++) {
    sum = sum + Number(localStorage.getItem(i));
  }

  console.log("Отображена сумма");

  let exactNumbers = 0;
  let massNumber = [];
  let massEnter = [];
  document.getElementById("sum").innerHTML = sum;

  let vid = " \n";
  for (let i = 0; i < localStorage.length; i++) {
    console.log(vid);
    vid += localStorage.getItem(i) + " \n";
    document.getElementById("vid").innerHTML = vid;
  }
}

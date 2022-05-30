function barcode(value) {
  let eanCode = value;

  let up = 0;
  let down = 0;
  Stringup = "";
  Stringdown = "";

  //console.log("eanCode.length=", eanCode.length);

  console.log(eanCode.length);

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
    console.log(eanCode);
  }

  if (eanCode.length)
    for (let i = eanCode.length - 1; i >= 0; i--) {
      //console.log("i=", i, "up =", up,"down=", down);
      if (i % 2 == 0) {
        Stringup = String(eanCode[i]) + " + " + Stringup;
        up = up + Number(eanCode[i]);
      } else {
        Stringdown = String(eanCode[i]) + " + " + Stringdown;
        down = down + Number(eanCode[i]);
      }
    }
  console.log("верх =", Stringup, "=", up);
  console.log("низ    =", Stringdown, "=", down * 3);
  sum = down * 3 + up;
  //console.log("sum=",sum );
  if (sum % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

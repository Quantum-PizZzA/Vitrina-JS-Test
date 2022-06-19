function checkEAN(value) {
  var eanCode = String(value);

  // WScript.Echo("eanCode.length - ", eanCode.length, "value - ", value);

  var up = 0;
  var down = 0;

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
    WScript.Echo("eanCode: ", eanCode);
  }
  //WScript.Echo("eanCode.length: ", eanCode.length);

  j = 4;
  //WScript.Echo("eanCode[", j, "]: ", eanCode.charAt(j));

  for (var i = eanCode.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      up = up + Number(eanCode.charAt(i));
    } else {
      down = down + Number(eanCode.charAt(i));
    }
  }
  var sum = down * 3 + up;
  //WScript.Echo("sum: ", sum, "down: ", down, "up: ", up);
  return sum % 10 === 0;
}
var m = 4607548752482;

for (var i = m - 1; i <= m + 1; i++) {
  WScript.Echo("  ");
  if (checkEAN(i) == 0) {
    // WScript.Echo(i, " no ean ", checkEAN(i));
  } else {
    WScript.Echo(i, " ean!!! ", checkEAN(i));
  }
}

function checkEAN(value) {
  var eanCode = String(value);
  var up = 0;
  var down = 0;

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
  }

  for (var i = eanCode.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      up = up + Number(eanCode.charAt(i));
    } else {
      down = down + Number(eanCode.charAt(i));
    }
  }
  var sum = down * 3 + up;
  return sum % 10 === 0;
}

// var s = 4607548752482 - 1;
// var f = 4607548752482 + 1;

var s = 1;
var f = 10000000;
var sum = 0;

for (var i = s; i <= f; i++) {
  if (checkEAN(i) == 0) {
    // WScript.Echo(i, " no ean ", checkEAN(i));
  } else {
    sum += i;
    // WScript.Echo(i, " ean!!! ", checkEAN(i));
    // WScript.Echo(sum);
    WScript.StdOut.Write("\r");
    WScript.StdOut.Write(sum);
  }
}
WScript.StdOut.Write("\r\n");

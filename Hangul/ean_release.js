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

var s = 100000000 - 1000;
var f = 100000000;

// var s = 0;
// var f = 100000000;

i_10 = "";

for (var i = s; i <= f; i++) {
  if (checkEAN(i) == 0) {
    // WScript.Echo(i, " no ean ", checkEAN(i));
  } else {
    // WScript.Echo(i, " ean!!! ", checkEAN(i));
    i_10 = i % 10;
    //WScript.Echo(i, "\t", i_10);
    WScript.StdOut.Write(i_10);
  }
}

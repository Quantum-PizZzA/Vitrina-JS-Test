function number13(x) {
  x = String(x);
  while (x.length < 10) {
    x = "0" + x;
  }
  return x;
}

function barcode(value) {
  var eanCode = String.value;

  WScript.Echo("eanCode[i]=", eanCode[2]);

  var up = 0;
  var down = 0;
  Stringup = "";
  Stringdown = "";

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
  }

  for (var i = eanCode.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      Stringup = String(eanCode[i]) + " + " + Stringup;
      up = up + String(eanCode[i]);
    } else {
      Stringdown = String(eanCode[i]) + " + " + Stringdown;
      down = down + String(eanCode[i]);
    }
  }
  WScript.Echo(Stringup);
  WScript.Echo(Stringdown);

  sum = down * 3 + up;
  if (sum % 10 == 0) {
    return true;
    WScript.Echo("true");
  } else {
    return false;
    WScript.Echo("false");
  }
}

n1 = "7708709686";
n = "9780750310512";

WScript.Echo(number13(n));
WScript.Echo(barcode(n));

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

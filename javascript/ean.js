export function checkEAN(value) {
  let eanCode = value;

  let up = 0;
  let down = 0;
  // Stringup = "";
  // Stringdown = "";

  if (eanCode.length % 2 == 0) {
    eanCode = "0" + eanCode;
  }

  if (eanCode.length)
    for (let i = eanCode.length - 1; i >= 0; i--) {
      if (i % 2 == 0) {
        // Stringup = String(eanCode[i]) + " + " + Stringup;
        up = up + Number(eanCode[i]);
      } else {
        // Stringdown = String(eanCode[i]) + " + " + Stringdown;
        down = down + Number(eanCode[i]);
      }
    }
  const sum = down * 3 + up;
  return sum % 10 === 0;
}

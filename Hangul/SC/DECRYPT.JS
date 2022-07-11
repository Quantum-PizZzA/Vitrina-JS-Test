function decript(value1) {
  // console.log("ПЕРЕДАНО В des = ", value1);
  // stringValueEdit1 = "ййй";

  if (44032 <= Number(value1) && Number(value1) <= 54031) {
    stringValueEdit1 = convert_0000(value1);
  }
  if (54032 <= Number(value1) && Number(value1) <= 55031) {
    stringValueEdit1 = convert__000(value1);
  }
  if (55032 <= Number(value1) && Number(value1) <= 55131) {
    stringValueEdit1 = convert___00(value1);
  }
  if (55132 <= Number(value1) && Number(value1) <= 55141) {
    stringValueEdit1 = convert____0(value1);
  }

  function convert____0(value1) {
    valueEdit1 = Number(value1) - 55132;
    stringValueEdit1 = String(valueEdit1);

    for (i1 = 0; stringValueEdit1.length < 1; i1++) {
      stringValueEdit1 = "0" + String(stringValueEdit1);
    }
    // console.log("convert_0");
    return stringValueEdit1;
  }
  function convert___00(value1) {
    valueEdit1 = Number(value1) - 55032;
    stringValueEdit1 = String(valueEdit1);

    for (i1 = 0; stringValueEdit1.length < 2; i1++) {
      stringValueEdit1 = "0" + String(stringValueEdit1);
    }
    // console.log("convert_00");
    return stringValueEdit1;
  }
  function convert__000(value1) {
    valueEdit1 = Number(value1) - 54032;
    stringValueEdit1 = String(valueEdit1);

    for (i1 = 0; stringValueEdit1.length < 3; i1++) {
      stringValueEdit1 = "0" + String(stringValueEdit1);
    }
    // console.log("convert_000");
    return stringValueEdit1;
  }
  function convert_0000(value1) {
    valueEdit1 = Number(value1) - 44032;
    stringValueEdit1 = String(valueEdit1);

    for (i1 = 0; stringValueEdit1.length < 4; i1++) {
      stringValueEdit1 = "0" + String(stringValueEdit1);
    }
    // console.log("convert_0000");
    return stringValueEdit1;
  }

  // return stringValueEdit1;
  return stringValueEdit1;
  // return "ййй";
}

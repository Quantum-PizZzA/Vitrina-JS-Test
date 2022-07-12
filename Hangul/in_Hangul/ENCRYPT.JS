function encript(value) {
  // console.log(value);
  value;
  if (value.length == 1) {
    convert____0();
  }
  if (value.length == 2) {
    convert___00();
  }
  if (value.length == 3) {
    convert__000();
  }
  if (value.length == 4) {
    convert_0000();
  }

  function convert____0() {
    valueEdit = Number(value) + 55132;
  }
  function convert___00() {
    valueEdit = Number(value) + 55032;
  }
  function convert__000() {
    valueEdit = Number(value) + 54032;
  }
  function convert_0000() {
    valueEdit = Number(value) + 44032;
  }

  return valueEdit;
}

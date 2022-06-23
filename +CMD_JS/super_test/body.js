function number13(x) {
  vid = "";
  if (x != "number") {
    return false;
  }
  // console.log(typeof x);

  for (i = 0; i < x.length; i++) {
    while (x[i].length < 15) {
      x[i] = "0" + x[i];
    }
    vid = vid + x[i].trim() + " \n";
    x[i] = String(x[i]);
  }
  //console.log(typeof x);
  return vid;
  //document.getElementById("vid").innerHTML = vid;
}
//WScript.Echo("qqq");
x = 123;
WScript.Echo(number13(x));

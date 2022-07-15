function WriteFile() {
  arrayFile = "";
  for (let i = 0; i < localStorage.length; i++) {
    arrayFile +=
      '"' +
      localStorage.key(i) +
      '":' +
      localStorage.getItem(localStorage.key(i)) +
      ",";
  }

  save =
    "<a download='localStorage.json' href='data:application/octet-stream;UTF-8,{" +
    arrayFile +
    "} '>download localStorage.json</a>";
  document.write(save);
}

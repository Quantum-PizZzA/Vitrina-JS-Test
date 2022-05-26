function createTable() {
    var row = parseInt(document.getElementById("row").value); //row - ряд
    var col = parseInt(document.getElementById("col").value); //col - столбец

    var tablestart="<table id=myTable border=1>";
    var tableend = "</table>";
    var trstart = "<tr bgcolor=#ff9966>";
    var trend = "</tr>";
    var tdstart = "<td>";
    var tdend = "</td>";  //col - столбец
    var data="data in cell";
    var str1=tablestart + trstart + tdstart + data + tdend + trend + tableend;
    document.write(tablestart);

    for (var r=0; r<row ; r++) { //row - ряд
        document.write(trstart); //row - ряд
        for(var c=0; c<col; c++) {                           //col - столбец
            document.write(tdstart+" r= "+r+" c= "+c+tdend); //col - столбец
        }
    }
}
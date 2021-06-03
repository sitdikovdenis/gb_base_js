function chessBoard() {
    var table = document.createElement("table");
    document.body.appendChild(table);
    table.setAttribute('class', 'chess_board_table')
    var remainder = 0;
    for (i = 0; i < 9; i++) {
        var line = document.createElement("tr");
        table.appendChild(line);
        for (j = 0; j < 9; j++) {
            var row = document.createElement("td");
            if (i == 8) {
                row.innerHTML = (j == 0) ? '' : j;
                row.setAttribute('class', 'char_cell')
                line.appendChild(row);
            }
            else {

                if (j == 0) {
                    row.innerHTML = String.fromCharCode(65 + i);
                    row.setAttribute('class', 'char_cell')
                    line.appendChild(row);
                }
                else {
                    row.setAttribute('class', (j % 2 == remainder) ? 'white_cell' : 'black_cell')
                    line.appendChild(row);
                }
            }
        }

        remainder == 0 ? remainder = 1 : remainder = 0;
    }


}


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let currentRow = board[i][j];
      let currentCol = board[j][i];
      let checkBox = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (currentRow != '.') {
        if (row.has(currentRow)) return false;
        row.add(currentRow);
      }
      if (currentCol != '.') {
        if (col.has(currentCol)) return false;
        col.add(currentCol);
      }
      
      if (checkBox != '.') {
        if (box.has(checkBox)) return false;
        box.add(checkBox);
      } 
    }
  }
  return true
};

//A Sudoku board is a 9x9 grid, divided into 9 smaller 3x3 grids, and the goal is to fill in the numbers 1 to 9 in such a way that each row, column, and smaller grid contains each number exactly once.

//The code goes through each row, column, and smaller grid in the board, and for each of them, it creates a new Set. A Set is like a special kind of list that only allows unique values - you can't add the same value twice.

//Then, it goes through each cell in that row, column, or smaller grid, and checks if it contains a number or a dot. If it contains a number, it checks if that number is already in the Set. If it is, that means there are two of the same number in that row, column, or smaller grid, which is not allowed in a valid Sudoku. So the function returns false.

//If the number is not in the Set yet, it adds it to the Set.

//After checking all the cells in each row, column, and smaller grid, the function returns true if no duplicates were found. Otherwise, it returns false.
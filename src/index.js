module.exports = function solveSudoku(matrix) {
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      j = matrix[i].indexOf(0);
      if (j!=-1){
      for (let num = 1; num < 10; num++) {
        if (checkRow(matrix, i, num)&&checkColumn(matrix, j, num)&&checkSegment(matrix, i, j, num)) {
          matrix[i][j] = num;
          if (solveSudoku(matrix)) return matrix;
        }
      }
      matrix[i][j] = 0;
      return false;
     }
     else{
       break;
     }
    }
  }
  return true;

  //checkFunctions
  function checkRow(matrix, row, num){
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] == num) return false;
    }
    return true;
  };

  function checkColumn(matrix, col, num){
    for (let i = 0; i < 9; i++) {
      if (matrix[i][col] == num) return false;
    }
    return true;
  };

  function checkSegment(matrix, row, col, num){
    let frstRow = 0;
    let frstCol = 0;
    if(row<3){
      frstRow = 0;
    }
    else if(row<6&&row>=3){
      frstRow = 3;
    }
    else if(row>=6){
      frstRow = 6;
    }
    if(col<3){
      frstCol = 0;
    }
    else if(col<6&&col>=3){
      frstCol = 3;
    }
    else if(col>=6){
      frstCol = 6;
    }
   
    for (let i = frstRow; i < frstRow + 3; i++) {
      for (let j = frstCol; j < frstCol + 3; j++) {
        if (matrix[i][j] == num) return false;
      }
    }
    return true;
  }

}

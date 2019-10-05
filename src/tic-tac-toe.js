class TicTacToe {
    constructor() {
      this.currentPlayer = true;
      this.gameField = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
       if(this.currentPlayer){
         return 'x';
       }
       return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.gameField[rowIndex][columnIndex] != null) return;
      if(this.currentPlayer){
        this.gameField[rowIndex][columnIndex]='x';
      }
      else{
        this.gameField[rowIndex][columnIndex]='o';
      }
      this.currentPlayer = !this.currentPlayer;
    }

    isFinished() {
      if(this.isDraw() || this.getWinner()){
        return true;
      }
      return false;
    }

    getWinner() {
      for(let i=0; i<3; i++){
        if((this.gameField[i][0]==this.gameField[i][1]&&this.gameField[i][0]==this.gameField[i][2])){
          return this.gameField[i][0];
        }
      }
      for(let i=0; i<3; i++){
        if((this.gameField[0][i]==this.gameField[1][i]&&this.gameField[0][i]==this.gameField[2][i])){
          return this.gameField[0][i];
        }
      }
      if((this.gameField[0][0]==this.gameField[1][1]&&this.gameField[0][0]==this.gameField[2][2])){
        return this.gameField[0][0];
      }
      if((this.gameField[0][2]==this.gameField[1][1]&&this.gameField[0][2]==this.gameField[2][0])){
        return this.gameField[0][2];
      }
      return null;
    }

    noMoreTurns() {
  for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        if(this.gameField[i][j]==null)
        return false;
      }
    }
    return true;
    }

    isDraw() {
     if (this.noMoreTurns() && !this.getWinner()) return true;
     return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

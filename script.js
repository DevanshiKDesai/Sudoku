// N-Queen Logic (backtracking)

function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] == num || board[x][col] == num || 
            board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] == num) {
            return false;
        }
    }
    return true;
}

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] == 0) { 
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num; 
                        if (solve(board)) { 
                            return true;
                        }
                        board[row][col] = 0; 
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function getBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let j = 0; j < 9; j++) {
            let value = document.getElementById(`cell-${i}-${j}`).value;
            row.push(value === "" ? 0 : parseInt(value)); 
        }
        board.push(row);
    }
    return board;
}

function displayBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`cell-${i}-${j}`).value = board[i][j] !== 0 ? board[i][j] : ''; 
        }
    }
}
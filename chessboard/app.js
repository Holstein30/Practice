// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the
// grid there is either a space or a "#" character. The characters should form a chessboard.

let grid = "";

function chessboard(h, w) {
  for (let i = 0; i < h; i++) {
    if (i % 2 === 0) {
      grid += " ";
    }
    for (let x = 0; x < w; x++) {
      if (x !== w - 1) {
        grid += " #";
      } else {
        grid += " #\n";
      }
    }
  }
  console.log(grid);
  grid = "";
}

chessboard(8, 4);
chessboard(10, 7);
chessboard(1, 2);

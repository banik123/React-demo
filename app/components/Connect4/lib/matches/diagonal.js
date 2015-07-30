export default isDiagonal;

// General rules
const matchReq = 4;
const numCols = 7;
const numRows = 6;

/**
 * Are there any diagonal matches?
 * @param  {Array}  grid Multidmentional array representing our grid
 * @return {Boolean}
 */
function isDiagonal(grid) {
  return isTopRight(grid) || isTopLeft(grid);
}

/**
 * Found in top right?
 * @param  {Array}  grid
 *
 * @return {Boolean}
 */
function isTopRight(grid) {

  let found;
  let foundPiece;
  let col;

  // Here, we take successive diagonals, defined by the location of their
  // "base", meaning the column where they meet the ground.
  // The initial baseCol is a negative number, representing that the diagonal
  // starts off the board. These diagonals intersect the board, nonetheless.
  for (
    let baseCol = matchReq - numRows;
    baseCol < numCols - (matchReq - 1);
    baseCol++
  ) {

    found = 0;
    foundPiece = 0;
    col = baseCol;

    // Here we work our way up the current diagonal
    for (let row = 0; row < numRows; row++) {

      // Ensure that the given column and row are on the board
      if (col >= 0 && col < numCols && row < numRows) {

        let piece = grid[col][row];

        // Does nothing if piece is zero
        if (!piece) {
          continue;
        }

        if (!foundPiece) {
          foundPiece = piece;
        }

        if (piece !== foundPiece) {
          break;
        }

        if ((++found) === 4) {
          return true;
        }
      }

      // increase column for next cell
      ++col;
    }
  }

  return false;
}


/**
 * Are there any diagonal matches from top left?
 * @param  {Array}  grid
 *
 * @return {Boolean}
 */
function isTopLeft(grid) {

  let found;
  let foundPiece;
  let col;

    // Here, we take successive diagonals, defined by the location of their "base",
    // meaning the column where they meet the ground.
    // The initial baseCol is a negative number, representing that the diagonal starts off
    // the board. These diagonals intersect the board, nonetheless.
  for (
    let baseCol = matchReq - numRows;
    baseCol < numCols - (matchReq - 1);
    baseCol++
  ) {

      found = 0;
      foundPiece = 0;
      col = baseCol;

      // Here we work our way *down* the current diagonal
      for (let row = 0; row < numRows; row++) {

        // Ensure that the given column and row are on the board
        if (col >= 0 && col < numCols && row < numRows) {

          let piece = grid[col][row];

          if (!piece) {
            break;
          }

          if (!foundPiece) {
            foundPiece = piece;
          }

          if (piece !== foundPiece) {
            break;
          }

          if ((++found) === 4) {
            return true;
          }
        }

        // increase column for next cell
        ++col;
      }
  }

  return false;
}
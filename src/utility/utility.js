export const generateRandomBoard = (row, col) => {
  let result = []
  for (let i = 0; i < row; i++) {
    result[i] = []
    for (let j = 0; j < col; j++) {   
      result[i][j] = (Math.random() <= 0.80) ? 0 : 1;
    }
  }
  return result;
};



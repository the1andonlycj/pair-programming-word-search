const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true; //As soon as it finds it
      }
    }
    let verticalJoin = transpose(letters);
    verticalJoin = verticalJoin.map((ls) => ls.join(""));
    console.log(verticalJoin);
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true; //As soon as it finds it
      }
    }
  
    return false; //AFTER it has checked vert and horiz
  };
  
  const transpose = function (matrix) {
    let vertArray = [];
    let newArrayCol = matrix[0].length;
    for (let i = 0; i < newArrayCol; i++) {
      vertArray.push([]);
    }
  
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        vertArray[c].push(matrix[r][c]);
      }
    }
  
    return vertArray;
  };
  
  
  module.exports = wordSearch;
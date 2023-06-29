
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  }

  matrix.map((element, index) => {
    if (index % 2 !== 0) {
      element.reverse();
    }
  });

  return matrix.flat();
}

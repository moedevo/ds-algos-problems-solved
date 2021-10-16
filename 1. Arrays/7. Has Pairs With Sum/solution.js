function hasPairsWithSum(array,sum) {
  for (let i = 0; i < array.length; i++) {
    if (array.find((item) => {return sum === array[i] + item}
    ));
    return true;
  };
  return false;
};
console.log(hasPairsWithSum([1,2,4,4],8))
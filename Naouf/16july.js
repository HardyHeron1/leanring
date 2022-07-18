const array = (arr) => {
  const ind = arr.indexOf("java");
  if (ind !== -1) {
    arr.splice(ind, 1, "I", "Like", "Java");
  }
  const ind1 = arr.indexOf("python");
  if (ind1 !== -1) {
     arr.splice(ind1 + 1, 0, "phython", "is", "easy");
  }
  console.log(ind, ind1);
  return arr;
};

console.log(array([1, "java", "python"]));


Array.prototype.flat = function() {
  return this.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return [...acc, ...curr.flat()]; 
    } else {
      return [...acc, curr];
    }
  }, []);
};

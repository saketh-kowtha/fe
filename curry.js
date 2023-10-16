function curry(fn) {
  curry.placeholder = Symbol()
  const argsLen = fn.length;
  function x(...args) {
    if (args.filter(arg => arg !== curry.placeholder).length >= argsLen) {
      return fn.apply(null, args); // Invoke the original function when all arguments are provided
    }
    return x.bind(null, ...args);
  }
  return x;
}

//curriedJoin(curry.placeholder, 2, 3)(3) // '1_2_3'

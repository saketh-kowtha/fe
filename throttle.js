function throttle(func, delay) {
  let cooling = false;
  return function(...args) {
    if (!cooling) {
      cooling = true;
      func.apply(this, args);
      setTimeout(() => cooling = false, delay);
    }
  };
}

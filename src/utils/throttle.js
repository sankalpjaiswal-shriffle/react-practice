const throttle = (func, delay) => {
  let last = 0;

  return (...args) => {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      func.apply(this, args);
    }
  };
};

export { throttle };

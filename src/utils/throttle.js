const throttle = (func, delay) => {
  let last = 0;

  return () => {
    let now = Date.now();
    if (now - last >= delay) {
      last = now;
      func();
    }
  };
};

export { throttle };

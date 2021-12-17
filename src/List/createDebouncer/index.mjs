export const createDebouncer = (delay) => {
  const state = {};

  return (f) => () => {
    if (state.pending) {
      clearTimeout(state.pending);
    }

    state.pending = setTimeout(() => {
      delete state.pending;
      f();
    }, delay);
  };
};

export default createDebouncer;

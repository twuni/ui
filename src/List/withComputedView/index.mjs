import DEFAULT_STATE from '../DEFAULT_STATE/index.mjs';

// eslint-disable-next-line complexity, max-statements
export const withComputedView = (state) => {
  if (state.count < 1 || state.viewport.start === state.viewport.end) {
    state.view = DEFAULT_STATE.view;
    return state;
  }

  state.view = { items: { end: 0, start: 0 }, post: 0, pre: 0 };

  let itemStart = 0;

  for (let index = 0; index < state.count; index++) {
    const itemHeight = state.itemHeights[index] ?? state.averageItemHeight;
    const itemEnd = itemStart + itemHeight;

    if (itemEnd <= state.viewport.start) {
      state.view.pre += itemHeight;
      state.view.items.start += 1;
    } else if (itemStart <= state.viewport.start && itemEnd >= state.viewport.end) {
      state.view.items.start += 1;
    }

    if (itemStart < state.viewport.end) {
      state.view.items.end += 1;
    } else {
      state.view.post += itemHeight;
    }

    itemStart = itemEnd;
  }

  return state;
};

export default withComputedView;

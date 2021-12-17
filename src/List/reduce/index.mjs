import DEFAULT_STATE from '../DEFAULT_STATE/index.mjs';
import average from '../average/index.mjs';
import withComputedView from '../withComputedView/index.mjs';

const Action = Object.freeze({
  MEASURE_ITEM: (state, payload) => {
    if (state.itemHeights[payload.index] !== payload.height) {
      const itemHeights = [...state.itemHeights];

      itemHeights[payload.index] = payload.height;

      const averageItemHeight = average(itemHeights);

      return withComputedView({ ...state, averageItemHeight, itemHeights });
    }

    return state;
  },

  MEASURE_VIEWPORT: (state, payload) => {
    if (payload.end !== state.viewport.end || payload.start !== state.viewport.start) {
      return withComputedView({ ...state, viewport: { end: payload.end, start: payload.start } });
    }

    return state;
  },

  RECOUNT: (state, payload) => {
    if (state.count !== payload.count) {
      return withComputedView({ ...state, count: payload.count });
    }

    return state;
  }
});

export const reduce = (state = DEFAULT_STATE, { payload, type }) => {
  const act = Action[type];

  if (act) {
    return act(state, payload);
  }

  return state;
};

export default reduce;

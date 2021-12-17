import { useEffect, useReducer, useState } from 'preact/hooks';

import Row from './Row/index.mjs';
import Spacer from './Spacer/index.mjs';
import Viewport from './Viewport/index.mjs';
import average from './average/index.mjs';
import { createRef } from 'preact';
import { html } from 'htm/preact';

const FPS = 60;
const RENDER_TICK_INTERVAL = 1000 / FPS;

const DEFAULT_STATE = Object.freeze({
  averageItemHeight: 35,
  count: 0,
  itemHeights: [],
  view: {
    items: {
      end: 0,
      start: 0
    },
    post: 0,
    pre: 0
  },
  viewport: {
    end: 0,
    start: 0
  }
});

const withComputedView = (state) => {
  if (state.count < 1 || state.viewport.start === state.viewport.end) {
    state.view = DEFAULT_STATE.view;
    return state;
  }

  state.view = { items: { end: 0, start: 0 }, post: 0, pre: 0 };

  let itemStart = 0;

  for (let index = 0; index < state.count; index++) {
    const itemHeight = (state.itemHeights[index] ?? state.averageItemHeight);
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

const reduce = (state = DEFAULT_STATE, { payload, type }) => {
  switch (type) {
    case 'RECOUNT':
      if (state.count !== payload.count) {
        return withComputedView({ ...state, count: payload.count });
      }
      break;
    case 'MEASURE_ITEM':
      if (state.itemHeights[payload.index] !== payload.height) {
        const itemHeights = [...state.itemHeights];

        itemHeights[payload.index] = payload.height;

        const averageItemHeight = average(itemHeights);

        return withComputedView({ ...state, averageItemHeight, itemHeights });
      }
      break;
    case 'MEASURE_VIEWPORT':
      if (payload.end !== state.viewport.end || payload.start !== state.viewport.start) {
        return withComputedView({ ...state, viewport: { end: payload.end, start: payload.start } });
      }
      break;
  }

  return state;
};

const createDebouncer = (delay) => {
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

const debounce = createDebouncer(RENDER_TICK_INTERVAL);

export const List = ({ count = 0, renderItem, ...otherProps }) => {
  const viewportRef = createRef();

  const [state, dispatch] = useReducer(reduce, DEFAULT_STATE);

  useEffect(() => {
    dispatch({ payload: { count }, type: 'RECOUNT' });
  }, [count]);

  useEffect(() => {
    const viewport = viewportRef?.current?.base;

    if (viewport) {
      const measure = debounce(() => {
        dispatch({
          payload: {
            end: viewport.scrollTop + viewport.clientHeight,
            start: viewport.scrollTop
          },
          type: 'MEASURE_VIEWPORT'
        });
      });

      measure();

      viewport.addEventListener('scroll', measure, false);
      viewport.ownerDocument.defaultView.addEventListener('resize', measure, false);

      return () => {
        viewport.removeEventListener('scroll', measure, false);
        viewport.ownerDocument.defaultView.removeEventListener('resize', measure, false);
      };
    }
  }, [viewportRef?.current?.base]);

  const onMeasure = (index) => (height) => {
    if (height !== state.itemHeights[index]) {
      dispatch({ payload: { height, index }, type: 'MEASURE_ITEM' });
    }
  };

  const items = [];

  for (let index = state.view.items.start; index < state.view.items.end; index++) {
    items.push(html`
      <${Row} key=${index} onMeasure=${onMeasure(index)}>
        ${renderItem(index)}
      <//>
    `);
  }

  return html`
    <${Viewport} ...${otherProps} ref=${viewportRef}>
      <${Spacer} style=${`height: ${state.view.pre}px`}/>
      ${items}
      <${Spacer} style=${`height: ${state.view.post}px`}/>
    <//>
  `;
};

export default List;

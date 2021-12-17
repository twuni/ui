import { useEffect, useReducer } from 'preact/hooks';

import DEFAULT_STATE from './DEFAULT_STATE/index.mjs';
import Item from './Item/index.mjs';
import Items from './Items/index.mjs';
import Viewport from './Viewport/index.mjs';
import createDebouncer from './createDebouncer/index.mjs';
import { createRef } from 'preact';
import { html } from 'htm/preact';
import reduce from './reduce/index.mjs';

// eslint-disable-next-line no-magic-numbers
const debounce = createDebouncer(17);

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

    return undefined;
  }, [viewportRef?.current?.base]);

  const onMeasure = (index) => (height) => {
    if (height !== state.itemHeights[index]) {
      dispatch({ payload: { height, index }, type: 'MEASURE_ITEM' });
    }
  };

  const items = [];

  for (let index = state.view.items.start; index < state.view.items.end; index++) {
    items.push(html`
      <${Item} key=${index} onMeasure=${onMeasure(index)}>
        ${renderItem(index)}
      <//>
    `);
  }

  return html`
    <${Viewport} ...${otherProps} ref=${viewportRef}>
      <${Items} style=${`padding: ${state.view.pre}px 0 ${state.view.post}px`}>
        ${items}
      <//>
    <//>
  `;
};

export default List;

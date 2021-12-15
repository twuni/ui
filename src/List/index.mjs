import { useEffect, useState } from 'preact/hooks';

import Scrollable from '../Scrollable/index.mjs';
import { createRef } from 'preact';
import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const average = (numbers) => {
  const { count, sum } = numbers.reduce((a, b) => {
    if (typeof b === 'number') {
      a.sum += b;
      a.count += 1;
    }
    return a;
  }, { count: 0, sum: 0 });

  return sum / count;
};

const Viewport = stylish('ol', `
  flex: 1;
  display: block;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
`);

const StylishRow = stylish('li', ({ theme }) => `
  align-items: stretch;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0 0 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
`);

const Spacer = stylish('li', ({ pixels, theme }) => `
  height: ${pixels}px;
  list-style: none;
  margin: 0;
  padding: 0;
`);

const Row = ({ children, onMeasure, ...otherProps }) => {
  const viewportRef = createRef();
  const [height, setHeight] = useState();

  useEffect(() => {
    const viewport = viewportRef?.current?.base;

    if (viewport) {
      if (viewport.clientHeight !== height) {
        setHeight(viewport.clientHeight);
      }
    }
  }, [children, viewportRef?.current?.base]);

  useEffect(() => {
    if (typeof onMeasure === 'function' && typeof height !== 'undefined') {
      onMeasure(height);
    }
  }, [onMeasure, height]);

  return html`
    <${StylishRow} ref=${viewportRef} ...${otherProps}>
      ${children}
    <//>
  `;
};

export const List = ({ count = 0, renderItem, ...otherProps }) => {
  const viewportRef = createRef();
  const [averageHeight, setAverageHeight] = useState(0);
  const [dimensions, setDimensions] = useState([]);
  const [fold, setFold] = useState();
  const [gutter, setGutter] = useState(0);
  const [layout, setLayout] = useState({ above: 0, below: 0, start: 0, end: 0 });

  useEffect(() => {
    const callback = () => {
      const nextFold = viewportRef?.current?.base?.clientHeight;

      if (nextFold !== fold) {
        setFold(nextFold);
      }
    };

    callback();

    addEventListener('resize', callback);

    return () => {
      removeEventListener('resize', callback);
    };
  }, [viewportRef?.current?.base?.clientHeight]);

  useEffect(() => {
    const callback = () => {
      const nextGutter = viewportRef?.current?.base?.scrollTop;

      if (nextGutter !== gutter) {
        setGutter(nextGutter);
      }
    };

    callback();

    addEventListener('resize', callback);

    return () => {
      removeEventListener('resize', callback);
    };
  }, [viewportRef?.current?.base?.scrollTop]);

  useEffect(() => {
    const callback = () => {
      const averageHeight = average(dimensions);
      const nextLayout = { above: 0, below: 0, start: 0 };

      while (nextLayout.above < gutter) {
        const itemHeight = typeof dimensions[nextLayout.start] === 'undefined' ? averageHeight : dimensions[nextLayout.start];

        if (nextLayout.above + itemHeight > gutter) {
          break;
        }

        nextLayout.above += itemHeight;
        nextLayout.start += 1;
      }

      nextLayout.end = nextLayout.start;
      let visibleItemsHeight = 0;

      while (visibleItemsHeight <= fold && nextLayout.end < count) {
        const itemHeight = typeof dimensions[nextLayout.end] === 'undefined' ? averageHeight : dimensions[nextLayout.end];

        visibleItemsHeight += itemHeight;
        nextLayout.end += 1;
      }

      if (nextLayout.end >= count) {
        nextLayout.end = count - 1;
      }

      for (let i = nextLayout.end + 1; i < count; i++) {
        nextLayout.below += typeof dimensions[i] === 'undefined' ? averageHeight : dimensions[i];
      }

      setLayout(nextLayout);
    };

    callback();

    addEventListener('resize', callback);

    return () => {
      removeEventListener('resize', callback);
    };
  }, [count, dimensions, gutter, fold]);

  const onMeasure = (index) => (height) => {
    if (dimensions[index] !== height) {
      const nextDimensions = [ ...dimensions ];
      nextDimensions[index] = height;
      setDimensions(nextDimensions);
    }
  };

  const onScroll = (event) => {
    setGutter(event.srcElement.scrollTop);
  };

  const viewportProps = { ...otherProps };

  delete viewportProps.children;

  return html`
    <${Viewport} ...${viewportProps} onScroll=${onScroll} ref=${viewportRef}>
      <${Spacer} pixels=${layout.above}/>
      ${(() => {
        const items = [];

        for (let i = layout.start; i <= layout.end; i++) {
          items.push(html`
            <${Row} onMeasure=${onMeasure(i)}>
              ${renderItem(i)}
            <//>
          `);
        }

        return items;
      })()}
      <${Spacer} pixels=${layout.below}/>
    <//>
  `;
};

export default List;

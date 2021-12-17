import { createRef } from 'preact';
import { html } from 'htm/preact';
import stylish from 'stylish-preact';
import { useEffect } from 'preact/hooks';

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

const FPS = 10;
const RENDER_TICK_INTERVAL = 1000 / FPS;

export const Row = ({ children, onMeasure, ...otherProps }) => {
  const viewportRef = createRef();

  useEffect(() => {
    const viewport = viewportRef?.current?.base;

    if (viewport && onMeasure) {
      onMeasure(viewport.clientHeight);
    }
  }, [viewportRef?.current?.base, onMeasure]);

  return html`
    <${StylishRow} ref=${viewportRef} ...${otherProps}>
      ${children}
    <//>
  `;
};

export default Row;

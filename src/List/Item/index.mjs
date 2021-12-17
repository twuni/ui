import { createRef } from 'preact';
import { html } from 'htm/preact';
import stylish from 'stylish-preact';
import { useEffect } from 'preact/hooks';

const StylishItem = stylish('li', `
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

export const Item = ({ children, onMeasure, ...otherProps }) => {
  const viewportRef = createRef();

  useEffect(() => {
    const viewport = viewportRef?.current?.base;

    if (viewport && onMeasure) {
      onMeasure(viewport.clientHeight);
    }
  }, [viewportRef?.current?.base, onMeasure]);

  return html`
    <${StylishItem} ...${otherProps} ref=${viewportRef}>
      ${children}
    <//>
  `;
};

export default Item;

import stylish from 'stylish-preact';

export const Scrollable = stylish('div', `
  display: block;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`);

export default Scrollable;

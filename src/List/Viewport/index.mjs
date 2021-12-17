import stylish from 'stylish-preact';

export const Viewport = stylish('ol', `
  flex: 1;
  display: block;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
`);

export default Viewport;

import stylish from 'stylish-preact';

export const Grid = stylish('div', ({ columns = 1, spacing = 2, theme }) => `
  display: grid;
  grid-gap: ${theme.spacing(spacing)};
  grid-template-columns: repeat(${columns}, 1fr);
  overflow: hidden;
  padding: ${theme.spacing(spacing)};
`);

export default Grid;

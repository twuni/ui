import stylish from 'stylish-preact';

export const Grid = stylish('div', [
  ({ spacing = 2, theme }) => `
    display: grid;
    grid-gap: ${theme.spacing(spacing)};
    overflow: hidden;
    padding: ${theme.spacing(spacing)};
  `,
  {
    media: '(min-width: 600px)',
    rule: ({ columns = 1 }) => `grid-template-columns: repeat(${columns}, 1fr);`
  },
  {
    media: '(max-width: 599px)',
    rule: 'grid-template-columns: 1fr;'
  }
]);

export default Grid;

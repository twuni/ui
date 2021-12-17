import stylish from 'stylish-preact';

const DEFAULT_SPACING = 2;

export const Grid = stylish('div', [
  ({ spacing = DEFAULT_SPACING, theme }) => `
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

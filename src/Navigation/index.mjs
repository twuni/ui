import stylish from 'stylish-preact';

export const Navigation = stylish('nav', [
  `
    align-items: stretch;
    display: flex;
    flex-direction: row;
    margin: 0;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0;
  `,
  {
    media: '(prefers-color-scheme: light)',
    rule: ({ theme }) => `
      background-color: ${theme.palette.primary};
      color: ${theme.palette.onPrimary};
    `
  },
  {
    media: '(prefers-color-scheme: dark)',
    rule: 'background-color: rgba(0, 0, 0, 0.25);'
  }
]);

export default Navigation;

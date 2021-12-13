import stylish from 'stylish-preact';

export const App = stylish('div', [
  ({ theme }) => `
    align-items: stretch;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    ${theme.typography.body1};
  `,
  {
    media: '(prefers-color-scheme: light)',
    rule: `
      background-color: #fff;
      color: #333;
    `
  },
  {
    media: '(prefers-color-scheme: dark)',
    rule: `
      background-color: #333;
      color: #eee;
    `
  }
]);

export default App;

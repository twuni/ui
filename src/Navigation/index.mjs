import stylish from 'stylish-preact';

export const Navigation = stylish('nav', ({ theme }) => `
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  margin-bottom: ${theme.spacing()};
  overflow-x: auto;
  overflow-y: hidden;
`);

export default Navigation;

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Figure = stylish('figure', [
  ({ onClick, theme }) => `
    background-color: rgba(0, 0, 0, 0);
    border-color: ${theme.palette.primary};
    border-radius: ${theme.spacing.sm};
    border-style: solid;
    border-width: 1px;
    cursor: ${onClick ? 'pointer' : 'default'};
    margin: ${theme.spacing.md};
    overflow: hidden;
    padding: 0;
    ${theme.transition('background-color')}
  `,
  {
    rule: ({ onClick }) => `background-color: rgba(0, 0, 0, ${onClick ? '0.05' : '0'})`,
    states: [':active', ':focus', ':hover']
  },
  {
    rule: ({ onClick }) => `background-color: rgba(0, 0, 0, ${onClick ? '0.1' : '0'})`,
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: ({ onClick }) => `background-color: rgba(0, 0, 0, ${onClick ? '0.15' : '0'})`,
    states: [':active:focus:hover']
  }
]);

const Caption = stylish('figcaption', ({ theme }) => `
  background-color: ${theme.palette.primary};
  color: ${theme.palette.onPrimary};
  margin: 0;
  padding: ${theme.spacing.md};
  ${theme.typography.caption}
`);

export const Specimen = ({ children, name, onClick }) => html`
  <${Figure} onClick=${onClick} title=${name}>
    ${children}
    <${Caption}>${name}<//>
  <//>
`;

export default Specimen;

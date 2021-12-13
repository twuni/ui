import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Figure = stylish('figure', [
  ({ theme }) => `
    background-color: rgba(0, 0, 0, 0);
    border-color: ${theme.palette.primary};
    border-radius: ${theme.spacing(0.5)};
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    margin: ${theme.spacing()};
    overflow: hidden;
    padding: 0;
    ${theme.transition('background-color')}
  `,
  {
    rule: 'background-color: rgba(0, 0, 0, 0.05)',
    states: [':active', ':focus', ':hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1)',
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15)',
    states: [':active:focus:hover']
  }
]);

const FigureCaption = stylish('figcaption', ({ theme }) => `
  background-color: ${theme.palette.primary};
  color: ${theme.palette.onPrimary};
  margin: 0;
  padding: ${theme.spacing()};
  ${theme.typography.caption}
`);

export const Specimen = ({ children, name, onClick }) => html`
  <${Figure} onClick=${onClick} title=${name}>
    ${children}
    <${FigureCaption}>${name}<//>
  <//>
`;

export default Specimen;

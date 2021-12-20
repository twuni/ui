import Card from '../Card/index.mjs';
import Panel from '../Panel/index.mjs';
import Typography from '../Typography/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Content = stylish('div', ({ theme }) => `
  padding: ${theme.spacing.md};
`);

const Actions = stylish('div', ({ theme }) => `
  align-items: stretch;
  display: flex;
  flex-direction: row-reverse;
  padding: ${theme.spacing.md};
`);

export const ActionCard = ({ actions, content, title, ...otherProps }) => html`
  <${Card} ...${otherProps}>
    <${Panel}
      content=${html`<${Content}>${content}<//>`}
      footer=${html`<${Actions}>${actions}<//>`}
      header=${html`<${Typography} kind="h5">${title}<//>`}
    />
  <//>
`;

export default ActionCard;

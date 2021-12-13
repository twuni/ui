import Scrollable from '../../Scrollable/index.mjs';
import Typography from '../../Typography/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Article = stylish('article', ({ theme }) => `
  padding: ${theme.spacing()};
`);

export const HomeRoute = () => html`
  <${Scrollable}>
    <${Typography} kind="h4">🌌 Twuni UI<//>
    <${Article}>
      <p>A UI framework built for Preact apps.<//>
    <//>
  <//>
`;

export default HomeRoute;

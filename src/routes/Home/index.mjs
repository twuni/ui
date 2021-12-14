import Card from '../../Card/index.mjs';
import Grid from '../../Grid/index.mjs';
import Panel from '../../Panel/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Typography from '../../Typography/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const FeaturesCard = stylish(Card, ({ theme }) => `
  margin: ${theme.spacing()};
`);

export const HomeRoute = () => html`
  <${Scrollable}>
    <${Typography} kind="h4">🌌 Twuni UI<//>
    <${FeaturesCard}>
      <${Panel}
        content=${html`
          <ul>
            <li>🔥 Fast<//>
            <li>🎈 Lightweight<//>
            <li>🚲 Easy to use<//>
          <//>
        `}
        header=${html`<${Typography} kind="h5">Features<//>`}
      />
    <//>
  <//>
`;

export default HomeRoute;

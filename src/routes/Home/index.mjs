import Status, { kindsOfStatus } from '../../Status/index.mjs';

import Card from '../../Card/index.mjs';
import Grid from '../../Grid/index.mjs';
import Panel from '../../Panel/index.mjs';
import Typography from '../../Typography/index.mjs';

import { html } from 'htm/preact';

export const HomeRoute = () => html`
  <${Typography} kind="h4">🌌 Twuni UI<//>
  <${Grid} columns=2 style="flex:1;overflow-x:hidden;overflow-y:auto;">
    <${Card}>
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
    <${Card}>
      <${Panel}
        content=${html`
          <ul>
            ${kindsOfStatus.map((kind) => html`
              <li>
                <${Status} kind=${kind}/>
              <//>
            `)}
            <li>
              <${Status} color="#f39">Custom<//>
            <//>
          <//>
        `}
        header=${html`<${Typography} kind="h5">Status Badges<//>`}
      />
    <//>
  <//>
`;

export default HomeRoute;

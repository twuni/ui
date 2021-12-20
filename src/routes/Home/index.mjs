import Pill, { kindsOfPill } from '../../Pill/index.mjs';
import Status, { kindsOfStatus } from '../../Status/index.mjs';

import Card from '../../Card/index.mjs';
import Grid from '../../Grid/index.mjs';
import Panel from '../../Panel/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Title from '../../Title/index.mjs';
import Typography from '../../Typography/index.mjs';

import { html } from 'htm/preact';

export const HomeRoute = () => html`
  <${Title} text="Twuni UI"/>
  <${Typography} kind="h4">🌌 Twuni UI<//>
  <${Scrollable}>
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
      <${Card}>
        <${Panel}
          content=${html`
            <ul>
              ${kindsOfPill.map((kind) => html`
                <li>
                  <${Pill} kind=${kind}>${kind}<//>
                <//>
                <li>
                  <${Pill} kind=${kind} solid>${kind}<//>
                <//>
              `)}
              <li>
                <${Pill} color="#f39">Custom<//>
              <//>
              <li>
                <${Pill} color="#f39" onColor="#fff" solid>Custom<//>
              <//>
            <//>
          `}
          header=${html`<${Typography} kind="h5">Pills<//>`}
        />
      <//>
    <//>
  <//>
`;

export default HomeRoute;

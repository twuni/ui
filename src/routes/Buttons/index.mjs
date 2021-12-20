import Button, { kindsOfButtons } from '@twuni/ui-button';

import Code from '@twuni/ui-code';
import Grid from '@twuni/ui-grid';
import Scrollable from '@twuni/ui-scrollable';
import Specimen from '../../Specimen/index.mjs';
import Title from '@twuni/ui-title';

import { html } from 'htm/preact';

const viewSource = (kind) => `<Button kind=${JSON.stringify(kind)}>...</Button>`;

export const ButtonsRoute = () => html`
  <${Title} text="Buttons | Twuni UI"/>
  <${Scrollable}>
    ${kindsOfButtons.map((kind) => html`
      <${Specimen} name=${kind}>
        <${Grid} columns=2>
          <${Button} kind=${kind}>${kind}<//>
          <${Code} block snippet=${viewSource(kind)}/>
        <//>
      <//>
    `)}
  <//>
`;

export default ButtonsRoute;

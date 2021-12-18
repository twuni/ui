import Button, { kindsOfButtons } from '../../Button/index.mjs';

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';
import Title from '../../Title/index.mjs';

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

import Button, { kindsOfButtons } from '../../Button/index.mjs';

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

const viewSource = (kind) => `<Button kind=${JSON.stringify(kind)}>...</Button>`;

export const ButtonsRoute = () => html`
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

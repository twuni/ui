import Typography, { kindsOfTypography } from '../../Typography/index.mjs';

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';

const viewSource = (kind) => `<Typography kind=${JSON.stringify(kind)}>...</Typography>`;

export const TypographyRoute = () => html`
  <${Scrollable}>
    ${kindsOfTypography.map((kind) => html`
      <${Specimen} name=${kind}>
        <${Grid} columns=2>
          <${Typography} kind=${kind}>The quick brown fox jumped over the lazy dog.<//>
          <${Code} block snippet=${viewSource(kind)}/>
        <//>
      <//>
    `)}
  <//>
`;

export default TypographyRoute;

import Typography, { kindsOfTypography } from '@twuni/ui-typography';

import Code from '@twuni/ui-code';
import Grid from '@twuni/ui-grid';
import Scrollable from '@twuni/ui-scrollable';
import Specimen from '../../Specimen/index.mjs';
import Title from '@twuni/ui-title';

import { html } from 'htm/preact';

const viewSource = (kind) => `<Typography kind=${JSON.stringify(kind)}>...</Typography>`;

export const TypographyRoute = () => html`
  <${Title} text="Typography | Twuni UI"/>
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

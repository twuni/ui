import Typography, { kindsOfTypography } from '../../Typography/index.mjs';

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';
import { useState } from 'preact/hooks';

const viewSource = (kind) => `<Typography kind=${JSON.stringify(kind)}>...</Typography>`;

export const TypographyRoute = ({}) => {
  const [source, setSource] = useState('<Typography>...</Typography>');

  return html`
    <${Code} block snippet=${source}/>
    <${Scrollable}>
      ${kindsOfTypography.map((kind) => html`
        <${Specimen} name=${kind} onClick=${() => setSource(viewSource(kind))}>
          <${Typography} kind=${kind}>The quick brown fox jumped over the lazy dog.<//>
        <//>
      `)}
    <//>
  `;
};

export default TypographyRoute;

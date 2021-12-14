import Input, { inputTypes } from '../../Input/index.mjs';

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

const viewSource = (type) => `<Input type=${JSON.stringify(type)}/>`;

export const InputsRoute = () => html`
  <${Scrollable}>
    ${inputTypes.map((type) => html`
      <${Specimen} name=${type}>
        <${Grid} columns=2>
          <${Input} placeholder=${type} type=${type}/>
          <${Code} block snippet=${viewSource(type)}/>
        <//>
      <//>
    `)}
  <//>
`;

export default InputsRoute;

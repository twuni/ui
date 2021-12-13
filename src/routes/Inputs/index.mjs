import Input, { inputTypes } from '../../Input/index.mjs';

import Code from '../../Code/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

const viewSource = (type) => `<Input type=${JSON.stringify(type)}/>`;

export const InputsRoute = () => {
  const [source, setSource] = useState(`<Input/>`);

  return html`
    <${Code} block snippet=${source}/>
    <${Scrollable}>
      ${inputTypes.map((type) => html`
        <${Specimen} name=${type} onClick=${() => setSource(viewSource(type))}>
          <${Input} type=${type}/>
        <//>
      `)}
    <//>
  `;
};

export default InputsRoute;

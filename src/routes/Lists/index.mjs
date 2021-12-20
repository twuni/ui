/* eslint-disable no-template-curly-in-string */

import Code from '@twuni/ui-code';
import Grid from '@twuni/ui-grid';
import List from '@twuni/ui-list';
import Specimen from '../../Specimen/index.mjs';
import Title from '@twuni/ui-title';

import { html } from 'htm/preact';

export const ListsRoute = () => html`
  <${Title} text="Lists | Twuni UI"/>
  <${Specimen} name="Virtualized List">
    <${Grid} columns=2>
      <${List} count=1000000 renderItem=${(index) => `Item ${index}`} style="height:320px"/>
      <${Code} block snippet=${'<List count={number} renderItem={(index) => `Item ${index}`}/>'}/>
    <//>
  <//>
`;

export default ListsRoute;

import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import List from '@twuni/ui-list';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

export const ListsRoute = () => html`
  <${Specimen} name="Virtualized List">
    <${Grid} columns=2>
      <${List} count=1000000 renderItem=${(index) => `Item ${index}`} style="height:320px"/>
      <${Code} block snippet=${`<List count={number} renderItem={(index) => \`Item \${index}\`}/>`}/>
    <//>
  <//>
`;

export default ListsRoute;

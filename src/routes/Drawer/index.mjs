import ActionCard from '../../ActionCard/index.mjs';
import Button from '../../Button/index.mjs';
import DrawerLayout from '../../DrawerLayout/index.mjs';
import Title from '../../Title/index.mjs';

import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

export const DrawerRoute = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return html`
    <${Title} text="Twuni UI"/>
    <${DrawerLayout}
      content=${html`
        <div style="padding:8px">
          <${ActionCard}
            actions=${html`
              <${Button} onClick=${toggleDrawer}>${isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}<//>
            `}
            content=${html`
              Check out this drawer layout. Try it.
            `}
            style="display:flex"
            title="Drawer"
          />
        <//>
      `}
      drawer=${isDrawerOpen && html`
        What a great drawer.
      `}
    />
  `;
};

export default DrawerRoute;

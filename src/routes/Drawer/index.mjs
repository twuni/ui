import ActionCard from '@twuni/ui-action-card';
import Button from '@twuni/ui-button';
import DrawerLayout from '@twuni/ui-drawer';
import Title from '@twuni/ui-title';

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

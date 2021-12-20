import ButtonsRoute from './Buttons/index.mjs';
import DrawerRoute from './Drawer/index.mjs';
import HomeRoute from './Home/index.mjs';
import InputsRoute from './Inputs/index.mjs';
import ListsRoute from './Lists/index.mjs';
import { Route } from 'router-preact';
import TypographyRoute from './Typography/index.mjs';

import { html } from 'htm/preact';

export const Routes = () => html`
  <${Route} path="/" render=${HomeRoute}/>
  <${Route} path="/buttons" render=${ButtonsRoute}/>
  <${Route} path="/inputs" render=${InputsRoute}/>
  <${Route} path="/lists" render=${ListsRoute}/>
  <${Route} path="/typography" render=${TypographyRoute}/>
  <${Route} path="/drawer" render=${DrawerRoute}/>
`;

export default Routes;

import ButtonsRoute from './Buttons/index.mjs';
import HomeRoute from './Home/index.mjs';
import InputsRoute from './Inputs/index.mjs';
import { Route } from 'router-preact';
import TypographyRoute from './Typography/index.mjs';

import { html } from 'htm/preact';

export const Routes = () => html`
  <${Route} path="/" render=${HomeRoute}/>
  <${Route} path="/buttons" render=${ButtonsRoute}/>
  <${Route} path="/inputs" render=${InputsRoute}/>
  <${Route} path="/typography" render=${TypographyRoute}/>
`;

export default Routes;

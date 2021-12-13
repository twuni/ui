import App from './App/index.mjs';
import HamburgerIcon from './icons/Hamburger/index.mjs';
import Navigation from './Navigation/index.mjs';
import NavigationLink from './NavigationLink/index.mjs';
import { NeutralTheme } from './themes/index.mjs';
import Routes from './routes/index.mjs';
import { Theme } from 'stylish-preact';

import { html } from 'htm/preact';
import { render } from 'preact';

render(html`
  <${Theme.Provider} value=${NeutralTheme}>
    <${App}>
      <${Navigation}>
        <${NavigationLink} to="/"><${HamburgerIcon}/><//>
        <${NavigationLink} to="/buttons">Buttons<//>
        <${NavigationLink} to="/inputs">Inputs<//>
        <${NavigationLink} to="/typography">Typography<//>
      <//>
      <${Routes}/>
    <//>
  <//>
`, document.body);

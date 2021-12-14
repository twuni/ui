import App from './App/index.mjs';
import { NeutralTheme } from './themes/index.mjs';
import { Theme } from 'stylish-preact';

import { html } from 'htm/preact';
import { render } from 'preact';

render(html`
  <${Theme.Provider} value=${NeutralTheme}>
    <${App}/>
  <//>
`, document.body);

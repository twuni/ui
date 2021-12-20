import App from './App/index.mjs';
import standardTheme from '@twuni/ui-theme-standard';
import { Theme } from 'stylish-preact';

import { html } from 'htm/preact';
import { render } from 'preact';

render(html`
  <${Theme.Provider} value=${standardTheme}>
    <${App}/>
  <//>
`, document.body);

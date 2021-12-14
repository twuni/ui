import HamburgerIcon from '../icons/Hamburger/index.mjs';
import Navigation from '../Navigation/index.mjs';
import NavigationLink from '../NavigationLink/index.mjs';
import Panel from '../Panel/index.mjs';
import Routes from '../routes/index.mjs';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';

export const Frame = stylish(Panel, [
  ({ theme }) => `
    align-items: stretch;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    ${theme.typography.body1};
  `,
  {
    media: '(prefers-color-scheme: light)',
    rule: `
      background-color: #fff;
      color: #333;
    `
  },
  {
    media: '(prefers-color-scheme: dark)',
    rule: `
      background-color: #333;
      color: #eee;
    `
  }
]);

export const App = () => html`
  <${Frame}
    content=${html`<${Routes}/>`}
    header=${html`
      <${Navigation}>
        <${NavigationLink} to="/"><${HamburgerIcon}/><//>
        <${NavigationLink} to="/buttons">Buttons<//>
        <${NavigationLink} to="/inputs">Inputs<//>
        <${NavigationLink} to="/typography">Typography<//>
      <//>
    `}
    style="flex: 1"
  />
`;

export default App;

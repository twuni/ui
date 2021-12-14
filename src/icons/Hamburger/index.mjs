import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Vector = stylish('svg', `
  display: inline-block;
  fill: currentColor;
  height: 1em;
  stroke: none;
  width: 1em;
`);

export const HamburgerIcon = (props) => html`
  <${Vector} viewBox="0 0 56 56" ...${props}>
    <rect height=8 width=56 x=0 y=8/>
    <rect height=8 width=56 x=0 y=24/>
    <rect height=8 width=56 x=0 y=40/>
  <//>
`;

export default HamburgerIcon;

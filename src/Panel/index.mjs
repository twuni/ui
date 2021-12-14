import { html } from 'htm/preact';
import stylish from 'stylish-preact';

export const Frame = stylish('section', `
  align-items: stretch;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`);

export const Header = stylish('header');

export const Content = stylish('div', `
  align-items: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`);

export const Footer = stylish('footer');

export const Panel = ({ content, footer, header, ...otherProps }) => html`
  <${Frame} ...${otherProps}>
    ${header && html`<${Header}>${header}<//>`}
    <${Content}>${content}<//>
    ${footer && html`<${Footer}>${footer}<//>`}
  <//>
`;

export default Panel;

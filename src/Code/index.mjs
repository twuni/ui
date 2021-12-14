import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Snippet = stylish('code', ({ block, theme }) => `
  ${block ? `
    background-color: rgba(255, 255, 255, 0.05);
    display: block;
    padding: ${theme.spacing()};
  ` : `
    display: inline-block;
  `}
  ${theme.typography.code}
`);

export const Code = ({ block = false, snippet }) => {
  return html`<${Snippet} block=${block}>${snippet}<//>`;
};

export default Code;

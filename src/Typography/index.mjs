import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const createKind = (kind, element) => stylish(element || kind, ({ theme }) => `
  display: block;
  margin: 0;
  padding: ${theme.spacing()};
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
  ${theme.typography[kind]}
`);

const Kind = Object.freeze({
  body: createKind('body1', 'span'),
  body1: createKind('body1', 'span'),
  body2: createKind('body2', 'span'),
  caption: createKind('caption', 'caption'),
  h1: createKind('h1'),
  h2: createKind('h2'),
  h3: createKind('h3'),
  h4: createKind('h4'),
  h5: createKind('h5'),
  h6: createKind('h6'),
  overline: createKind('overline', 'div'),
  subtitle1: createKind('subtitle1', 'div'),
  subtitle2: createKind('subtitle2', 'div')
});

export const kindsOfTypography = Object.freeze(Object.keys(Kind));

export const Typography = ({ kind = 'body', ...otherProps }) => {
  return html`
    <${Kind[kind]} ...${otherProps}/>
  `;
};

export default Typography;

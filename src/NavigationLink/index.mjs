import { Link } from 'router-preact';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';
import { useState } from 'preact/hooks';

const StylishLink = stylish(Link, [
  ({ isActive, theme }) => `
    display: inline-block;
    line-height: ${theme.spacing(8)};
    padding: 0 ${theme.spacing(2)};
    text-decoration: none;
    ${isActive ? `
      background-color: ${theme.palette.primary};
      color: ${theme.palette.onPrimary};
      pointer-events: none;
    ` : `
      background-color: rgba(0, 0, 0, 0);
      color: inherit;
    `}
    ${theme.transition('background-color', 'color')}
  `,
]);

export const NavigationLink = (props) => {
  const [isActive, setActive] = useState();

  return html`<${StylishLink} ...${props} isActive=${isActive} onActiveChange=${setActive}/>`;
};

export default NavigationLink;

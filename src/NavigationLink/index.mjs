import { Link } from 'router-preact';

import { html } from 'htm/preact';
import stylish from 'stylish-preact';
import { useState } from 'preact/hooks';

const onlyWhenInactive = (rule) => ({ isActive }) => {
  if (isActive) {
    return '';
  }
  return rule;
};

const StylishLink = stylish(Link, [
  ({ isActive, theme }) => `
    display: inline-block;
    line-height: ${theme.spacing.xxl};
    padding: 0 ${theme.spacing.lg};
    pointer-events: ${isActive ? 'none' : 'auto'};
    text-decoration: none;
    ${theme.transition('background-color', 'color')}
  `,
  {
    rule: onlyWhenInactive('background-color: rgba(0, 0, 0, 0.05)'),
    states: [':active', ':focus', ':hover']
  },
  {
    rule: onlyWhenInactive('background-color: rgba(0, 0, 0, 0.1)'),
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: onlyWhenInactive('background-color: rgba(0, 0, 0, 0.15)'),
    states: [':active:focus:hover']
  },
  {
    media: '(prefers-color-scheme: light)',
    rule: ({ isActive }) => `
      ${isActive ? `
        background-color: rgba(0, 0, 0, 0.25);
        color: inherit;
      ` : `
        background-color: rgba(0, 0, 0, 0);
        color: inherit;
      `}
    `
  },
  {
    media: '(prefers-color-scheme: dark)',
    rule: ({ isActive, theme }) => `
      ${isActive ? `
        background-color: ${theme.palette.primary};
        color: ${theme.palette.onPrimary};
      ` : `
        background-color: rgba(0, 0, 0, 0);
        color: inherit;
      `}
    `
  }
]);

export const NavigationLink = (props) => {
  const [isActive, setActive] = useState();

  return html`<${StylishLink} ...${props} isActive=${isActive} onActiveChange=${setActive}/>`;
};

export default NavigationLink;

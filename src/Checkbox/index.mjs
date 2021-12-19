import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const StylishCheckbox = stylish('span', [
  ({ theme }) => `
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-style: solid;
    border-width: ${theme.spacing.xs};
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-size: ${theme.spacing.xl};
    height: ${theme.spacing.touch};
    justify-content: center;
    line-height: ${theme.spacing.touch};
    margin: 0;
    opacity: 1;
    outline: ${theme.palette.primary};
    overflow: hidden;
    padding: 0;
    text-shadow: ${theme.shadow.text};
    user-select: none;
    width: ${theme.spacing.touch};
    ${theme.transition('background-color', 'border-color', 'color', 'opacity')}
  `,
  {
    rule: ({ disabled }) => {
      if (disabled) {
        return `
          opacity: 0.5;
          pointer-events: none;
        `;
      }
      return '';
    }
  },
  {
    rule: ({ theme }) => `
      border-color: ${theme.palette.primary};
    `,
    states: [':focus']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.05);',
    states: [':active', ':focus', ':hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1);',
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15);',
    states: [':active:focus:hover']
  }
]);

const Mark = stylish('span', ({ checked, theme }) => `
  opacity: ${checked ? '1' : '0.05'};
  ${theme.transition('opacity')}
`);

const KEY_CODE_ENTER = 13;

const intercept = (callback) => (event) => {
  if (typeof event.keyCode === 'number' && event.keyCode !== KEY_CODE_ENTER) {
    return;
  }
  event.preventDefault();
  callback();
};

export const Checkbox = ({ checked = false, indeterminate = false, onChange, ...otherProps }) => {
  const onClick = intercept(onChange);
  return html`
    <${StylishCheckbox} ...${otherProps} aria-checked=${checked} onClick=${onClick} onKeyDown=${onClick} role="checkbox" tabindex=0>
      ${indeterminate || html`<${Mark} checked=${checked}>✔<//>`}
    <//>
  `;
};

export default Checkbox;

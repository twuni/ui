import stylish from 'stylish-preact';

export const inputTypes = Object.freeze([
  'date',
  'datetime-local',
  'email',
  'file',
  'number',
  'password',
  'radio',
  'range',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
]);

export const Input = stylish('input', [
  ({ theme }) => `
    background: none;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    border-radius: ${theme.spacing.xs};
    border-style: solid;
    border-width: 0 0 ${theme.spacing.xs};
    box-sizing: border-box;
    color: inherit;
    display: block;
    line-height: ${theme.spacing.touch};
    margin: 0;
    outline: none;
    padding: 0 ${theme.spacing.md};
    width: 100%;
    ${theme.transition('background-color', 'border-color')}
  `,
  {
    rule: ({ theme }) => `border-color: ${theme.palette.primary};`,
    states: [':focus']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.05)',
    states: [':active', ':focus', ':hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1)',
    states: [':active:focus', ':active:hover', ':focus:hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15)',
    states: [':active:focus:hover']
  },
  {
    rule: ({ theme }) => `
      border-color: ${theme.palette.error};
    `,
    states: [':invalid', ':invalid:focus']
  }
]);

export default Input;

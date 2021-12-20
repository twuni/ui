import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const transparent = 'rgba(0, 0, 0, 0)';

const Kind = Object.freeze([
  ['error', 'onError'],
  ['info', 'onInfo'],
  ['neutral', 'onNeutral'],
  ['primary', 'onPrimary'],
  ['secondary', 'onSecondary'],
  ['success', 'onSuccess'],
  ['warning', 'onWarning']
].reduce((a, [background, foreground]) => Object.assign(a, {
  [background]: {
    background,
    foreground,
    rule: ({ theme }) => `
      background-color: ${transparent};
      border-color: ${transparent};
      color: ${theme.palette[background]};
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
    `
  },
  [`${background}Outline`]: {
    background,
    foreground,
    rule: ({ theme }) => `
      background-color: ${transparent};
      border-color: ${theme.palette[background]};
      color: ${theme.palette[background]};
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
    `
  },
  [`${background}Solid`]: {
    background,
    foreground,
    rule: ({ theme }) => `
      background-color: ${theme.palette[background]};
      border-color: ${theme.palette[background]};
      color: ${theme.palette[foreground]};
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
    `
  }
}), {}));

export const kindsOfButtons = Object.freeze(Object.keys(Kind));

const Frame = stylish('button', [
  ({ kind = 'primary', theme }) => `
    align-items: stretch;
    background: none;
    border-radius: ${theme.spacing.sm};
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    filter: saturate(1);
    flex-direction: column;
    margin: 0;
    opacity: 1;
    outline: none;
    overflow: hidden;
    padding: 0;
    user-select: none;
    ${theme.typography.button};
    ${theme.transition('box-shadow', 'filter', 'opacity')}
    ${Kind[kind].rule({ theme })}
  `,
  {
    rule: `
      filter: saturate(0);
      opacity: 0.5;
      pointer-events: none;
    `,
    states: [':disabled']
  },
  {
    rule: ({ kind = 'primary', theme }) => `
      border-color: ${theme.palette[Kind[kind].background]};
      border-style: dotted;
      box-shadow: 0 0 ${theme.spacing.md} ${theme.palette[Kind[kind].background]};
    `,
    states: [':focus']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.05)',
    states: [':active > span', ':hover > span']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1)',
    states: [':active:focus > span', ':active:hover > span', ':focus:hover > span']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15)',
    states: [':active:focus:hover > span']
  }
]);

const Shadow = stylish('span', ({ theme }) => `
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  border-radius: ${theme.spacing.sm};
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  line-height: ${theme.spacing.touch};
  margin: 0;
  overflow: hidden;
  padding: 0 ${theme.spacing.md};
  text-overflow: ellipsis;
  white-space: nowrap;
  ${theme.transition('background-color')}
`);

export const Button = (props) => {
  const childProps = { ...props };

  delete childProps.children;

  const onClick = (event) => {
    if (typeof props.onClick === 'function') {
      event.preventDefault();
      props.onClick();
    }
  };

  return html`
    <${Frame} ...${childProps} onClick=${onClick}>
      <${Shadow}>
        ${props.children}
      <//>
    <//>
  `;
};

export default Button;

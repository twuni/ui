import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const transparent = 'rgba(0, 0, 0, 0)';

const applyKind = Object.freeze([
  ['error', 'onError'],
  ['info', 'onInfo'],
  ['neutral', 'onNeutral'],
  ['primary', 'onPrimary'],
  ['secondary', 'onSecondary'],
  ['success', 'onSuccess'],
  ['warning', 'onWarning']
].reduce((a, [background, foreground]) => Object.assign(a, {
  [background]: ({ theme }) => `
    background-color: ${transparent};
    border-color: ${transparent};
    color: ${theme.palette[background]};
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  `,
  [`${background}Outline`]: ({ theme }) => `
    background-color: ${transparent};
    border-color: ${theme.palette[background]};
    color: ${theme.palette[background]};
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
  `,
  [`${background}Solid`]: ({ theme }) => `
    background-color: ${theme.palette[background]};
    border-color: ${transparent};
    color: ${theme.palette[foreground]};
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  `
}), {}));

export const kindsOfButtons = Object.freeze(Object.keys(applyKind));

const Frame = stylish('button', [
  ({ kind = 'primary', theme }) => `
    align-items: stretch;
    background: none;
    border-radius: ${theme.spacing.sm};
    border-style: solid;
    border-width: 1px;
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
    ${applyKind[kind]({ theme })}
    ${theme.transition('filter', 'opacity')}
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
    rule: 'background-color: rgba(0, 0, 0, 0.05)',
    states: [':active > span', ':focus > span', ':hover > span']
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

const Shadow = stylish('span', [
  ({ theme }) => `
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
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
  `
]);

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

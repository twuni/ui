import { createRef } from 'preact';
import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const StylishInput = stylish('input', `
  display: none;
`);

const Swatch = stylish('span', [
  ({ theme, value }) => `
    align-items: stretch;
    background-color: ${value};
    border-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    border-style: solid;
    border-width: ${theme.spacing.xs};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: ${theme.spacing.touch};
    outline: none;
    overflow: hidden;
    user-select: none;
    width: ${theme.spacing.touch};
    ${theme.transition('background-color', 'border-color')}
  `,
  {
    rule: ({ theme }) => `
      border-color: ${theme.palette.primary};
    `,
    states: [':focus']
  }
]);

const Overlay = stylish('span', [
  ({ theme }) => `
    background-color: rgba(0, 0, 0, 0);
    flex: 1;
    ${theme.transition('background-color')}
  `,
  {
    rule: 'background-color: rgba(0, 0, 0, 0.1)',
    states: [':active', ':hover']
  },
  {
    rule: 'background-color: rgba(0, 0, 0, 0.15)',
    states: [':active:hover']
  }
]);

const createLookup = (array) => array.reduce((has, item) => {
  has[item] = true;
  return has;
}, {});

const except = (object, ...keys) => {
  const has = createLookup(keys);

  return Object.keys(object).reduce((a, key) => {
    if (!has[key]) {
      a[key] = object[key];
    }
    return a;
  }, {});
};

const KEY_CODE_ENTER = 13;

const captureEvent = (event) => {
  event.stopPropagation();
};

export const ColorInput = (props) => {
  const inputRef = createRef();

  const onChange = (event) => {
    props.onChange(event.target.value);
  };

  const onClick = (event) => {
    const input = inputRef?.current?.base;

    if (input) {
      event.preventDefault();
      input.click();
      input.select();
    }
  };

  const onKeyDown = (event) => {
    const input = inputRef?.current?.base;

    if (input && event.keyCode === KEY_CODE_ENTER) {
      event.preventDefault();
      input.click();
      input.select();
    }
  };

  return html`
    <${Swatch} ...${except(props, 'onChange')} onClick=${onClick} onKeyDown=${onKeyDown} tabindex=0>
      <${StylishInput} onChange=${onChange} onClick=${captureEvent} ref=${inputRef} type="color" value=${props.value}/>
      <${Overlay}/>
    <//>
  `;
};

export default ColorInput;

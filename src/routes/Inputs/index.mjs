import Input, { inputTypes } from '../../Input/index.mjs';

import Checkbox from '../../Checkbox/index.mjs';
import Code from '../../Code/index.mjs';
import ColorInput from '../../ColorInput/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';
import Title from '../../Title/index.mjs';

import { html } from 'htm/preact';
import { useReducer } from 'preact/hooks';

const viewInputSource = (type) => `<Input type=${JSON.stringify(type)}/>`;

const viewColorInputSource = (value) => `<ColorInput onChange={(value) => ...} value=${JSON.stringify(value)}/>`;

const viewCheckboxSource = ({ checked, indeterminate }) => {
  if (!checked && !indeterminate) {
    return '<Checkbox/>';
  }

  return `<Checkbox ${[checked && 'checked', indeterminate && 'indeterminate'].filter(Boolean).join(' ')}/>`;
};

const initialState = Object.freeze({
  checkbox: {
    checked: false,
    indeterminate: true
  },
  color: '#3f9'
});

const reduce = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        checkbox: {
          checked: state.checkbox.indeterminate ? true : !state.checkbox.checked,
          indeterminate: false
        }
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: payload.value
      };
    default:
      break;
  }

  return state;
};

export const InputsRoute = () => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const onToggleCheckbox = () => {
    dispatch({ type: 'TOGGLE_CHECKBOX' });
  };

  const onChangeColor = (value) => {
    dispatch({ payload: { value }, type: 'CHANGE_COLOR' });
  };

  return html`
    <${Title} text="Inputs | Twuni UI"/>
    <${Scrollable}>
      <${Specimen} name="<ColorInput>">
        <${Grid} columns=2>
          <${ColorInput} onChange=${onChangeColor} value=${state.color}/>
          <${Code} block snippet=${viewColorInputSource(state.color)}/>
        <//>
      <//>
      <${Specimen} name="<Checkbox>">
        <${Grid} columns=2>
          <${Checkbox} checked=${state.checkbox.checked} indeterminate=${state.checkbox.indeterminate} onChange=${onToggleCheckbox}/>
          <${Code} block snippet=${viewCheckboxSource(state.checkbox)}/>
        <//>
      <//>
      ${inputTypes.map((type) => html`
        <${Specimen} name=${type}>
          <${Grid} columns=2>
            <${Input} placeholder=${type} type=${type}/>
            <${Code} block snippet=${viewInputSource(type)}/>
          <//>
        <//>
      `)}
    <//>
  `;
};

export default InputsRoute;

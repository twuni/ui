import Input, { inputTypes } from '../../Input/index.mjs';

import Checkbox from '../../Checkbox/index.mjs';
import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';
import Title from '../../Title/index.mjs';

import { html } from 'htm/preact';
import { useReducer } from 'preact/hooks';

const viewInputSource = (type) => `<Input type=${JSON.stringify(type)}/>`;

const viewCheckboxSource = ({ checked, indeterminate }) => {
  if (!checked && !indeterminate) {
    return '<Checkbox/>';
  }

  return `<Checkbox ${[checked && 'checked', indeterminate && 'indeterminate'].filter(Boolean).join(' ')}/>`;
};

const initialState = Object.freeze({
  checked: false,
  indeterminate: true
});

const reduce = (state = initialState, { type }) => {
  switch (type) {
    case 'CHANGE':
      return {
        ...state,
        checked: state.indeterminate ? true : !state.checked,
        indeterminate: false
      };
    default:
      break;
  }

  return state;
};

export const InputsRoute = () => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const onChange = () => {
    dispatch({ type: 'CHANGE' });
  };

  return html`
    <${Title} text="Inputs | Twuni UI"/>
    <${Scrollable}>
      <${Specimen} name="checkbox">
        <${Grid} columns=2>
          <${Checkbox} checked=${state.checked} indeterminate=${state.indeterminate} onChange=${onChange}/>
          <${Code} block snippet=${viewCheckboxSource(state)}/>
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

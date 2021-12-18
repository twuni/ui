import Input, { inputTypes } from '../../Input/index.mjs';

import Checkbox from '../../Checkbox/index.mjs';
import Code from '../../Code/index.mjs';
import Grid from '../../Grid/index.mjs';
import Scrollable from '../../Scrollable/index.mjs';
import Specimen from '../../Specimen/index.mjs';

import { html } from 'htm/preact';
import { useReducer } from 'preact/hooks';

const viewSource = (type) => `<Input type=${JSON.stringify(type)}/>`;

const initialState = Object.freeze({
  checked: false,
  indeterminate: true
});

const reduce = (state = initialState, { payload, type }) => {
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
    <${Scrollable}>
      <${Specimen} name="checkbox">
        <${Grid} columns=2>
          <${Checkbox} checked=${state.checked} indeterminate=${state.indeterminate} onChange=${onChange}/>
          <${Code} block snippet=${`<Checkbox${[state.checked && 'checked', state.indeterminate && 'indeterminate'].reduce((a, b) => {
            if (b) {
              if (a) {
                return `${a} ${b}`;
              }
              return ` ${b}`;
            }
            return a;
          }, '')}/>`}/>
        <//>
      <//>
      ${inputTypes.map((type) => html`
        <${Specimen} name=${type}>
          <${Grid} columns=2>
            <${Input} placeholder=${type} type=${type}/>
            <${Code} block snippet=${viewSource(type)}/>
          <//>
        <//>
      `)}
    <//>
  `;
};

export default InputsRoute;

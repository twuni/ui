import Button from '../Button/index.mjs';

import stylish from 'stylish-preact';

export const Action = stylish(Button, ({ theme }) => `
  border-radius: 50%;
  line-height: ${theme.spacing(6)};
  width: ${theme.spacing(6)};
`);

export default Action;

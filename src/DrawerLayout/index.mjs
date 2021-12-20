import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Layout = stylish('div', `
  align-items: stretch;
  display: flex;
  flex: 1;
  flex-direction: row;
`);

const Drawer = stylish('aside', ({ open = false, size, theme }) => `
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 0 1px 0 0;
  box-sizing: border-box;
  margin: 0 0 0 ${open ? '0' : `-${size}`};
  width: ${size};
  ${theme.transition('margin')}
`);

export const DrawerLayout = ({ content, drawer, drawerSize = '320px' }) => html`
  <${Layout}>
    <${Drawer} open=${Boolean(drawer)} size=${drawerSize}>${drawer}<//>
    <${Layout}>${content}<//>
  <//>
`;

export default DrawerLayout;

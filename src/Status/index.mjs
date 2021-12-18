import { html } from 'htm/preact';
import stylish from 'stylish-preact';

const Light = stylish('span', ({ color, status, theme }) => `
  background-color: ${color || theme.palette[status]};
  border-radius: 50%;
  display: inline-block;
  height: 0.75em;
  margin: 0 ${theme.spacing.sm} 0 0;
  overflow: hidden;
  width: 0.75em;
`);

const Badge = stylish('span', ({ theme }) => `
  align-items: center;
  display: flex;
  flex-direction: row;
  ${theme.typography.body2}
  text-transform: capitalize;
`);

export const kindsOfStatus = Object.freeze(['neutral', 'success', 'warning', 'error']);

export const Status = ({ children, color, kind = 'neutral', ...otherProps }) => html`
  <${Badge} ...${otherProps}>
    <${Light} color=${color} status=${kind}/>
    ${children ?? kind}
  <//>
`;

export default Status;

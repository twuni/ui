import stylish from 'stylish-preact';

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
    foreground
  }
}), {}));

export const kindsOfPill = Object.freeze(Object.keys(Kind));

export const Pill = stylish('span', [
  `
    border-style: solid;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
  `,
  ({ color, kind, solid, onColor, theme }) => {
    const background = color || theme.palette[Kind[kind].background];
    const foreground = onColor || (color ? 'inherit' : theme.palette[Kind[kind].foreground]);

    if (solid) {
      return `
        border-color: ${background};
        background-color: ${background};
        border-radius: ${theme.spacing.lg};
        border-width: 1px;
        color: ${foreground};
        padding: 0 ${theme.spacing.md};
        text-shadow: ${theme.shadow.text};
        ${theme.typography.body2}
      `;
    }
    return `
      border-color: ${background};
      border-radius: ${theme.spacing.sm};
      border-width: 1px 1px 1px ${theme.spacing.md};
      color: ${background};
      padding: 0 ${theme.spacing.sm};
      ${theme.typography.body2}
    `;
  }
]);

export default Pill;

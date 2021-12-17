import stylish from 'stylish-preact';

export const Card = stylish('div', [
  ({ theme }) => `
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: ${theme.spacing.sm};
    border-style: solid;
    border-width: 1px;
    box-shadow: ${theme.shadow.soft};
  `,
  {
    media: '(prefers-color-scheme: light)',
    rule: () => `
      background-color: #fff;
      color: #333;
    `
  },
  {
    media: '(prefers-color-scheme: dark)',
    rule: () => `
      background-color: #222;
      color: #ddd;
    `
  }
]);

export default Card;

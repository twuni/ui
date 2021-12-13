export const Theme = Object.freeze({
  breakpoints: {
    xs: '(max-width: 599px)',
    sm: '(min-width: 600px) and (max-width: 899px)',
    md: '(min-width: 900px) and (max-width: 1199px)',
    lg: '(min-width: 1200px) and (max-width: 1535px)',
    xl: '(min-width: 1536px)'
  },
  elevation: {
    low: '1',
    high: '2',
    higher: '3',
    highest: '4'
  },
  palette: {
    error: '#c13',
    info: '#222',
    neutral: '#888',
    onError: '#fff',
    onInfo: '#fff',
    onNeutral: '#fff',
    onPrimary: '#fff',
    onSecondary: '#fff',
    onSuccess: '#fff',
    onWarning: '#fff',
    primary: '#35c',
    secondary: '#93c',
    success: '#080',
    warning: '#d70'
  },
  shadow: {
    heavy: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    soft: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    subtle: '1px 1px 1px rgba(0, 0, 0, 0.25)'
  },
  spacing: (multiplier = 1) => `${multiplier * 8}px`,
  transition: (...properties) => `
    transition-duration: 100ms;
    transition-property: ${properties.join(', ')};
    transition-timing-function: ease-in-out;
  `,
  typography: {
    body1: 'font: 400 16px sans-serif;',
    body2: 'font: 400 14px sans-serif;',
    button: 'font: 700 14px sans-serif; text-transform: uppercase;',
    caption: 'font: 400 12px sans-serif;',
    code: 'font-family: monospace;',
    h1: 'font: 200 96px sans-serif;',
    h2: 'font: 200 60px sans-serif;',
    h3: 'font: 200 48px sans-serif;',
    h4: 'font: 400 34px sans-serif;',
    h5: 'font: 400 24px sans-serif;',
    h6: 'font: 700 20px sans-serif;',
    overline: 'font: 400 10px sans-serif; text-transform: uppercase;',
    subtitle1: 'font: 700 16px sans-serif;',
    subtitle2: 'font: 400 14px sans-serif;'
  },
});

export default Theme;

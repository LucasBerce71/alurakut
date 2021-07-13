import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export function ThemeProvider({ children }) {
  return (
    <ThemeProviderStyled theme={theme}>
      {children}
    </ThemeProviderStyled>
  );
}
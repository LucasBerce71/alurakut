import { ThemeProvider } from '../styles/theme';
import { GlobalStyle } from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

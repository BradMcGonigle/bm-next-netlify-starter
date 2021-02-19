import { ThemeProvider } from 'theme-ui'
import theme from './themes/_theme'

import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application

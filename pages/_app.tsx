import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import * as gtag from 'lib/gtag'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/theme'
// NOTE: This is used on enough pages and on the globabl theme, it is okay to import the font globally
import 'styles/wesfy.css'

function App({ Component, pageProps }: AppProps): React.ReactElement {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default App

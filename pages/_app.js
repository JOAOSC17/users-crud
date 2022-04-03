import '../styles/globals.css'
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'

function MyApp({ Component, pageProps, cookies  }) {
  return (
    <ChakraProvider
      colorModeManager={
        typeof cookies === 'string'
          ? cookieStorageManager(cookies)
          : localStorageManager
      }
    >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
MyApp.getInitialProps  = ({ ctx }) => {
  return {
    cookies: ctx.req.headers.cookie ?? '',
  }
}
export default MyApp

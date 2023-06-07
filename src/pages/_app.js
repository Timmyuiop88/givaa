import '@/styles/globals.css'
import '@/styles/style.css'
import { ChakraProvider , extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'guminert'`,
    body: `'guminert'`,
  },
})



export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme} >
  <Component {...pageProps} />
    </ChakraProvider>
  
  )
}

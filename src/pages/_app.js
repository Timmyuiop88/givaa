import '@/styles/globals.css'
import '@/styles/style.css'
import '@fontsource-variable/manrope';
import { ChakraProvider , extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Manrope Variable', sans-serif`,
    body: `'Manrope Variable', sans-serif`,
  },
})



export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme} >
  <Component {...pageProps} />
    </ChakraProvider>
  
  )
}

import '../styles/globals.css'
import Layout from '../components/Layout'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../fonts/Fonts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

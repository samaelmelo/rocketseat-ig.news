import { Header } from '../components/Header'

// tipando as props
import { AppProps } from 'next/app'

import {Provider as NextAuthProvier} from "next-auth/client"

import '../styles/global.scss'

// passando as tipagens
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvier session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvier>
  )
}

export default MyApp

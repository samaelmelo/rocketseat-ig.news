import { Header } from '../components/Header'
import '../styles/global.scss'

// tipando as props
import { AppProps } from 'next/app'

// passando as tipagens
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

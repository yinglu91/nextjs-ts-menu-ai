import { AppProps } from 'next/app'
import '../styles/globals.css'

const  MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

// https://www.youtube.com/watch?v=ShufCBZi_r8
// Build an AI POWERED SHOPPING CART in React w/ Alan AI - Feb 17, 2021
// https://studio.alan.app/plans

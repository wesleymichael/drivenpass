import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/global.style';
import ResetStyle from '@/styles/reset.styles';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />   
    </>
  )
}
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import '../styles/reset.scss';
import '../styles/global.scss';
import { useRouter } from 'next/router';
 
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentRouterPage = router.pathname;

  return (
    <>
      {currentRouterPage !== '/register' &&
       currentRouterPage !== '/login' && 
       <Header />
      }
      <Component {...pageProps} /> 
    </>
  )
}
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import '../styles/reset.scss';
import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from '@/context/UserContext';
 
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentRouterPage = router.pathname;

  return (
    <>
      <ToastContainer/>
      <UserProvider>
        {currentRouterPage !== '/register' &&
        currentRouterPage !== '/login' && 
        <Header />
        }
        <Component {...pageProps} /> 
      </UserProvider>
    </>
  )
}
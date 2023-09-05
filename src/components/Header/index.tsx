import Link from 'next/link';
import { TbLogout } from 'react-icons/tb';
import { GiPadlock } from 'react-icons/gi';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useUserContext } from '@/hooks/useUserContext';

export function Header() {
  const router = useRouter();
  const { setUserData } = useUserContext();

  function logout() {
    const confirmLogout = confirm("Tem certeza de que deseja sair?");
  
    if (confirmLogout) {
      localStorage.removeItem('userData');
      setUserData({token: ''});
      router.push('/login');
    }
  }
  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/">
          <GiPadlock/>
        </Link>
        <Link href="/"><h1>DrivenPass</h1></Link>
        <TbLogout onClick={logout} />
      </div>
    </header>
  )
}
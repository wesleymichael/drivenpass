import Image from 'next/image';
import Link from 'next/link';
import { TbLogout } from 'react-icons/tb';
import { GiPadlock } from 'react-icons/gi';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/">
          <GiPadlock/>
        </Link>
        <Link href="/"><h1>DrivenPass</h1></Link>
        <TbLogout/>
      </div>
    </header>
  )
}
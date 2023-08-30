import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from './styles.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillCreditCard, AiOutlineWifi } from 'react-icons/ai';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Driven Pass - Organizando suas senhas</title>
      </Head>
      <main>
        <SubTitleBar title='Minhas senhas'/>
        <div className={styles.categoryContainer}>
          <Link href='/credentials'>
            <div>
              <RiLogoutBoxRFill />
              <h1>Credenciais</h1>
            </div>
          </Link>
          <div className={styles.number}>
            {1}
          </div>
        </div>

        <div className={styles.categoryContainer}>
          <Link href='/notes'>
            <div>
              <BsFillPencilFill />
              <h1>Notas seguras</h1>
            </div>
          </Link>
          <div className={styles.number}>
            {5}
          </div>
        </div>

        <div className={styles.categoryContainer}>
          <Link href='/cards'>
            <div>
              <AiFillCreditCard />
              <h1>Cartões</h1>
            </div>
          </Link>
          <div className={styles.number}>
            {7}
          </div>
        </div>

        <div className={styles.categoryContainer}>
          <Link href='/wifi'>
            <div>
              <AiOutlineWifi />
              <h1>Senhas de Wi-fi</h1>
            </div>
          </Link>
          <div className={styles.number}>
            {17}
          </div>
        </div>
      </main>
    </>
  )
}

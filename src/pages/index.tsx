import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillCreditCard, AiOutlineWifi } from 'react-icons/ai';
import Link from "next/link";
import useToken from "@/hooks/useToken";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGetCards from "@/hooks/api/useGetCards";
import useGetNotes from "@/hooks/api/useGetNotes";
import { useCredentialContext } from "@/hooks/useCredentialContext";
import { useWifiContext } from "@/hooks/useWifiContext";

export default function Home() {
  const { credentialsData } = useCredentialContext();
  const { wifisData } = useWifiContext();
  const { cards } = useGetCards();
  const { notes } = useGetNotes();
  const router = useRouter();
  const token = useToken();
  
  useEffect(() => {
    if(!token) {
      router.push('/login');
    }
  }, [router, token]);

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
            {credentialsData?.length}
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
            {notes?.length}
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
          {cards?.length}
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
            {wifisData?.length}
          </div>
        </div>
      </main>
    </>
  )
}

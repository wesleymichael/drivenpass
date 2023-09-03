import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useToken from "@/hooks/useToken";
import styles from '@/styles/home.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { BsFillPencilFill } from 'react-icons/bs';
import { SubTitleBar } from "@/components/SubtitleBar";
import { useWifiContext } from "@/hooks/useWifiContext";
import { useNotesContext } from "@/hooks/useNoteContext";
import { useCardsContext } from "@/hooks/useCardContext";
import { AiFillCreditCard, AiOutlineWifi } from 'react-icons/ai';
import { useCredentialContext } from "@/hooks/useCredentialContext";

export default function Home() {
  const { credentialsData } = useCredentialContext();
  const { notesData } = useNotesContext();
  const { wifisData } = useWifiContext();
  const { cardsData } = useCardsContext();
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
            {notesData?.length}
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
          {cardsData?.length}
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

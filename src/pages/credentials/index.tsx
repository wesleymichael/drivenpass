import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import footerStyles from '@/components/Footer/styles.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { MdAddCircleOutline } from 'react-icons/md';
import Link from "next/link";
import { useCredentialContext } from "@/hooks/useCredentialContext";

export default function Credentials() {
  const { credentialsData } = useCredentialContext();

  return (
    <>
      <Head>
        <title>Credenciais</title>
      </Head>
      <main>
        <SubTitleBar title='Credenciais'/>
        {credentialsData?.map((credential) => {
          return (
          <>
            <div className={styles.categoryContainer}>
              <Link href={`/credentials/${credential.id}`}>
                <div>
                  <RiLogoutBoxRFill />
                  <h1>{credential.title}</h1>
                </div>
              </Link>
            </div>
          </>
          )
        })}
        <div className={footerStyles.footerContainer}>
          <Link href='/'>
            <div>
              <h1>
                <HiOutlineArrowLeft />
                <p>Voltar</p>
              </h1>
            </div>
          </Link>
          <div className={footerStyles.icon_add}>
            <MdAddCircleOutline />
          </div>
        </div>
      </main>
    </>
  )
}

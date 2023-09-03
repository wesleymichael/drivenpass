import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
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
      </main>
    </>
  )
}

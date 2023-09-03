import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import Link from "next/link";
import useGetCredentials from "@/hooks/api/useGetCredentials";

export default function Credentials() {
  const { credentials } = useGetCredentials();

  return (
    <>
      <Head>
        <title>Credenciais</title>
      </Head>
      <main>
        <SubTitleBar title='Credenciais'/>
        {credentials?.map((credential) => {
          return (
            <>
            <div className={styles.categoryContainer}>
              <Link href='/credentials'>
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

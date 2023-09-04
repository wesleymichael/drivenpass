import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { SubTitleBar } from '@/components/SubtitleBar';
import styles from '../../components/styles/item.module.scss';
import footerStyles from '@/components/Footer/styles.module.scss';
import { useWifiContext } from '@/hooks/useWifiContext';

export default function WifiPage() {
  const router = useRouter();
  const { id } = router.query;
  const { wifisData } = useWifiContext();

  const wifi = wifisData.find((wifi) => wifi.id === Number(id));

  return (
    <>
      <Head>
        <title>Wifi</title>
      </Head>
      <main>
        <SubTitleBar title='Wifi'/>
        {wifi ? (
          <div className={styles.categoryContainer}>
            <h1>{wifi.title}</h1>
            <div className={styles.paramContainer}>
              <div>
                <h2>Nome da rede:</h2>
                <p>{wifi.name}</p>
              </div>
              <div>
                <h2>Senha:</h2>
                <p>{wifi.password}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Ainda não possui dados</div>
        )}
        <div className={footerStyles.footerContainer}>
          <Link href='/wifi'>
            <div>
              <h1>
                <HiOutlineArrowLeft />
                <p>Voltar</p>
              </h1>
            </div>
          </Link>
          <div className={footerStyles.icon_add}>
            <MdDeleteForever color = {'red'} />
          </div>
        </div>
      </main>
    </>
  );
}

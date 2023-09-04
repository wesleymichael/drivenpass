import Link from 'next/link';
import Head from 'next/head';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import useDeleteWifi from '@/hooks/api/useDeleteWifi';
import { SubTitleBar } from '@/components/SubtitleBar';
import { useWifiContext } from '@/hooks/useWifiContext';
import styles from '../../components/styles/item.module.scss';
import footerStyles from '@/components/Footer/styles.module.scss';

export default function WifiPage() {
  const { wifisData, setWifisData } = useWifiContext();
  const { deleteWifi } = useDeleteWifi();
  const router = useRouter();
  const { id } = router.query;

  const wifi = wifisData.find((wifi) => wifi.id === Number(id));

  async function deleteById(id: number) {
    try {
      const res = await deleteWifi(id);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setWifisData(wifisData.filter(wifi => wifi.id !== id));
        router.push('/wifi');
      }
    } catch (error) {
      toast('Error!');
      console.log(error);
    }
  }

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
          <div className={`${footerStyles.icon_add} ${footerStyles.icon_delete}`} onClick={() => deleteById(Number(id))}>
            <MdDeleteForever />
          </div>
        </div>
      </main>
    </>
  );
}

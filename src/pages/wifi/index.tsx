import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { AiOutlineWifi } from 'react-icons/ai';
import Link from "next/link";
import footerStyles from '@/components/Footer/styles.module.scss';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import { useWifiContext } from "@/hooks/useWifiContext";

export default function Wifis() {
  const { wifisData } = useWifiContext();

  return (
    <>
      <Head>
        <title>Redes Wifi</title>
      </Head>
      <main>
        <SubTitleBar title='Wifi'/>
        {wifisData?.map((wifi) => {
          return (
            <>
            <div className={styles.categoryContainer}>
              <Link href={`/wifi/${wifi.id}`}>
                <div>
                  <AiOutlineWifi />
                  <h1>{wifi.title}</h1>
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

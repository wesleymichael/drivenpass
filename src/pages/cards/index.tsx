import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { AiFillCreditCard } from 'react-icons/ai';
import Link from "next/link";
import useGetCards from "@/hooks/api/useGetCards";
import footerStyles from '@/components/Footer/styles.module.scss';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";

export default function Cards() {
  const { cards } = useGetCards();

  return (
    <>
      <Head>
        <title>Cartões</title>
      </Head>
      <main>
        <SubTitleBar title='Cartões'/>
        {cards?.map((card) => {
          return (
            <>
            <div className={styles.categoryContainer}>
              <Link href={`/cards/${card.id}`}>
                <div>
                  <AiFillCreditCard />
                  <h1>{card.title}</h1>
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

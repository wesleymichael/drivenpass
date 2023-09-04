import Head from "next/head";
import Link from "next/link";
import styles from '@/styles/home.module.scss';
import { AiFillCreditCard } from 'react-icons/ai';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import { SubTitleBar } from "@/components/SubtitleBar";
import { useCardsContext } from "@/hooks/useCardContext";
import footerStyles from '@/components/Footer/styles.module.scss';

export default function Cards() {
  const { cardsData } = useCardsContext();

  return (
    <>
      <Head>
        <title>Cartões</title>
      </Head>
      <main>
        <SubTitleBar title='Cartões'/>
        {cardsData?.map((card) => {
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
          <Link href='/cards/create'>
            <div className={footerStyles.icon_add}>
              <MdAddCircleOutline />
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

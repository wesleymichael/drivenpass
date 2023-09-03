import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { AiFillCreditCard } from 'react-icons/ai';
import Link from "next/link";
import useGetCards from "@/hooks/api/useGetCards";

export default function Credentials() {
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
      </main>
    </>
  )
}

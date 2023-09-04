import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cards from 'react-credit-cards-2';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { SubTitleBar } from '@/components/SubtitleBar';
import { useCardsContext } from '@/hooks/useCardContext';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styles from '../../components/styles/item.module.scss';
import footerStyles from '@/components/Footer/styles.module.scss';
import useDeleteCards from '@/hooks/api/useDeleteCards';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export default function CardsPage() {
  const { deleteCards } = useDeleteCards();
  const { cardsData, setCardsData } = useCardsContext();
  const router = useRouter();
  const { id } = router.query;
  const [isFront, setIsFront] = useState(true);

  const card = cardsData.find((card) => card.id === Number(id));

  async function deleteById(id: number) {
    try {
      const res = await deleteCards(id);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setCardsData(cardsData.filter(c => c.id !== id));
        router.push('/cards');
      }
    } catch (error) {
      toast('Error!');
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Cartões</title>
      </Head>
      <main>
        <SubTitleBar title='Cartões'/>
        {card ? (
          <div className={styles.categoryContainer}>
            <h1>{card.title}</h1>
            <div className={styles.paramContainer}>
              <div onClick={() => setIsFront(!isFront)}>
                <Cards
                  number={Number(card.number)}
                  expiry={card.exp}
                  cvc={card.cvv}
                  name={card.name}
                  focused={isFront ? 'number' : 'cvc'}
                />
              </div>

              <div>
                <h2>Senha:</h2>
                <p>{card.password}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Ainda não possui dados</div>
        )}
        <div className={footerStyles.footerContainer}>
          <Link href='/cards'>
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

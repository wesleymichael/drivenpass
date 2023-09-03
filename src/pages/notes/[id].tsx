import styles from '../../components/styles/item.module.scss';
import { useRouter } from 'next/router';
import { SubTitleBar } from '@/components/SubtitleBar';
import Head from 'next/head';
import footerStyles from '@/components/Footer/styles.module.scss';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { MdDeleteForever } from 'react-icons/md';
import { useNotesContext } from '@/hooks/useNoteContext';

export default function NotesPage() {
  const router = useRouter();
  const { id } = router.query;
  const { notesData } = useNotesContext();

  const note = notesData.find((note) => note.id === Number(id));

  return (
    <>
      <Head>
        <title>Notas Seguras</title>
      </Head>
      <main>
        <SubTitleBar title='Notas Seguras'/>
        {note ? (
          <div className={styles.categoryContainer}>
            <h1>{note.title}</h1>
            <div className={styles.paramContainer}>
              <div>
                <h2>Anotação:</h2>
                <p>{note.anotation}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Ainda não possui dados</div>
        )}
        <div className={footerStyles.footerContainer}>
          <Link href='/notes'>
            <div>
              <h1>
                <HiOutlineArrowLeft />
                <p>Voltar</p>
              </h1>
            </div>
          </Link>
          <div className={footerStyles.icon_add}>
            <MdDeleteForever />
          </div>
        </div>
      </main>
    </>
  );
}

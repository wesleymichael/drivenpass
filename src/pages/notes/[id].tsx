import Head from 'next/head';
import Link from 'next/link';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { MdDeleteForever } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import useDeleteNote from '@/hooks/api/useDeleteNote';
import { SubTitleBar } from '@/components/SubtitleBar';
import { useNotesContext } from '@/hooks/useNoteContext';
import styles from '../../components/styles/item.module.scss';
import footerStyles from '@/components/Footer/styles.module.scss';

export default function NotesPage() {
  const { notesData, setNotesData } = useNotesContext();
  const { noteLoading, deleteNote } = useDeleteNote();
  const router = useRouter();
  const { id } = router.query;

  const note = notesData.find((note) => note.id === Number(id));

  async function deleteById(id: number) {
    try {
      const res = await deleteNote(id);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setNotesData(notesData.filter(note => note.id !== id));
        router.push('/notes');
      }
    } catch (error) {
      toast('Error!');
      console.log(error);
    }
  }

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
          <div className={`${footerStyles.icon_add} ${footerStyles.icon_delete}`} onClick={() => deleteById(Number(id))}>
            <MdDeleteForever />
          </div>
        </div>
      </main>
    </>
  );
}

import Link from "next/link";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { BsFillPencilFill } from 'react-icons/bs';
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdAddCircleOutline } from "react-icons/md";
import { SubTitleBar } from "@/components/SubtitleBar";
import { useNotesContext } from "@/hooks/useNoteContext";
import footerStyles from '@/components/Footer/styles.module.scss';

export default function Notes() {
  const { notesData } = useNotesContext();

  return (
    <>
      <Head>
        <title>Notas Seguras</title>
      </Head>
      <SubTitleBar title='Notas Seguras'/>
      <main className={styles.itemContent}>
        {notesData?.map((note) => {
          return (
          <>
            <div className={styles.categoryContainer}>
              <Link href={`/notes/${note.id}`}>
                <div>
                  <BsFillPencilFill />
                  <h1>{note.title}</h1>
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
          <Link href='/notes/create'>
            <div className={footerStyles.icon_add}>
              <MdAddCircleOutline/>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

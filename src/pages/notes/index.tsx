import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from '@/styles/home.module.scss';
import { BsFillPencilFill } from 'react-icons/bs';
import Link from "next/link";
import useGetNotes from "@/hooks/api/useGetNotes";

export default function Credentials() {
  const { notes } = useGetNotes();

  return (
    <>
      <Head>
        <title>Notas Seguras</title>
      </Head>
      <main>
        <SubTitleBar title='Notas Seguras'/>
        {notes?.map((note) => {
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
      </main>
    </>
  )
}

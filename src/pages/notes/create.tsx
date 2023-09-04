import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
import useCreateNote from "@/hooks/api/useCreateNote";
import { SubTitleBar } from "@/components/SubtitleBar";
import { useNotesContext } from "@/hooks/useNoteContext";
import formStyles from '@/components/styles/form.module.scss';
import footerStyles from "@/components/Footer/styles.module.scss";

export default function AddNote() {
  const { createNote, noteLoading } = useCreateNote();
  const { notesData, setNotesData } = useNotesContext();
  const router = useRouter();
  
  const [form, setForm] = useState({
    title: "",
    anotation: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    try {
      const res = await createNote(form);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setNotesData([...notesData, res]);
        router.push('/notes');
      }
    } catch (error) {
      toast('Error');
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Adicionar Nota</title>
      </Head>
      <SubTitleBar title="Adicionar Nota" />
      <main className={styles.itemContent}>
        <form className={formStyles.formContainer} onSubmit={handleSubmit}>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Anotação:</label>
            <textarea
              name="anotation"
              value={form.anotation}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" disabled={noteLoading}>Adicionar</button>
        </form>
      </main>
      <div className={footerStyles.footerContainer}>
        <Link href="/notes">
          <div>
            <h1>
              <HiOutlineArrowLeft />
              <p>Voltar</p>
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}

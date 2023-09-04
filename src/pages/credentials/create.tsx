import { SubTitleBar } from "@/components/SubtitleBar";
import Head from "next/head";
import styles from "@/styles/home.module.scss";
import formStyles from '@/components/styles/form.module.scss';
import footerStyles from "@/components/Footer/styles.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function AddCredential() {
  const [form, setForm] = useState({
    title: "",
    username: "",
    password: "",
    url: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: integração com a API
    try {
      //Enviar para API
      console.log("Enviando dados:", form);
      //Encaminhar para a rota /credentials
    } catch (error) {
      console.error("Erro ao criar a credencial:", error);
      //Tratar erros
    }
  };

  return (
    <>
      <Head>
        <title>Adicionar Credencial</title>
      </Head>
      <SubTitleBar title="Adicionar Credencial" />
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
            <label>Nome de Usuário:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>URL:</label>
            <input
              type="url"
              name="url"
              value={form.url}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </main>
      <div className={footerStyles.footerContainer}>
        <Link href="/credentials">
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

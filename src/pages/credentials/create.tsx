import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { SubTitleBar } from "@/components/SubtitleBar";
import formStyles from '@/components/styles/form.module.scss';
import footerStyles from "@/components/Footer/styles.module.scss";
import useCreateCredentials from "@/hooks/api/useCreateCredentials";
import { useCredentialContext } from "@/hooks/useCredentialContext";

export default function AddCredential() {
  const { createCredential, credentialLoading } = useCreateCredentials();
  const { credentialsData, setCredentialsData } = useCredentialContext();
  const router = useRouter();
  
  const [form, setForm] = useState({
    title: "",
    username: "",
    password: "",
    url: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    try {
      const res = await createCredential(form);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setCredentialsData([...credentialsData, { ...res, password: form.password }]);
        router.push('/credentials');
      }
    } catch (error) {
      toast('Error');
      console.log(error);
    }
  }

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
          <button type="submit" disabled={credentialLoading}>
            {credentialLoading ? 
              <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#0a0a0a" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              /> 
              : 'Adicionar' }
          </button>
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

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.scss";
import { ThreeDots } from "react-loader-spinner";
import { HiOutlineArrowLeft } from "react-icons/hi";
import useCreateWifi from "@/hooks/api/useCreateWifi";
import { SubTitleBar } from "@/components/SubtitleBar";
import { useWifiContext } from "@/hooks/useWifiContext";
import formStyles from '@/components/styles/form.module.scss';
import footerStyles from "@/components/Footer/styles.module.scss";

export default function AddCredential() {
  const { createWifi, wifiLoading } = useCreateWifi();
  const { wifisData, setWifisData } = useWifiContext();
  const router = useRouter();
  
  const [form, setForm] = useState({
    title: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    try {
      const res = await createWifi(form);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setWifisData([...wifisData, { ...res, password: form.password }]);
        router.push('/wifi');
      }
    } catch (error) {
      toast('Error');
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Adicionar Wifi</title>
      </Head>
      <SubTitleBar title="Adicionar Wifi" />
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
            <label>Nome da rede:</label>
            <input
              type="text"
              name="name"
              value={form.name}
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
          <button type="submit" disabled={wifiLoading}>
            {wifiLoading ? 
              <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#0a0a0a" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              /> 
              : 'Adicionar'}
          </button>
        </form>
      </main>
      <div className={footerStyles.footerContainer}>
        <Link href="/wifi">
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

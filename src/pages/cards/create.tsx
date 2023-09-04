import Link from "next/link";
import Head from "next/head";
import CardForm from "@/components/CardForm";
import styles from "@/styles/home.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { SubTitleBar } from "@/components/SubtitleBar";
import footerStyles from "@/components/Footer/styles.module.scss";

export default function AddCredential() {
  return (
    <>
      <Head>
        <title>Adicionar Credencial</title>
      </Head>
      <SubTitleBar title="Adicionar Credencial" />
      <main className={styles.itemContent}>
        <CardForm />
      </main>
      <div className={footerStyles.footerContainer}>
        <Link href="/cards">
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

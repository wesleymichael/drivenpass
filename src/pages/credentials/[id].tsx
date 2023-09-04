import { useCredentialContext } from '@/hooks/useCredentialContext';
import styles from '../../components/styles/item.module.scss';
import { useRouter } from 'next/router';
import { SubTitleBar } from '@/components/SubtitleBar';
import Head from 'next/head';
import footerStyles from '@/components/Footer/styles.module.scss';
import Link from 'next/link';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { MdDeleteForever } from 'react-icons/md';
import useDeleteCredentials from '@/hooks/api/useDeleteCredentials';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export default function CredentialsPage() {
  const { credentialsData, setCredentialsData } = useCredentialContext();
  const { credentialLoading, deleteCredential } = useDeleteCredentials();
  const router = useRouter();
  const { id } = router.query;

  const credential = credentialsData.find((c) => c.id === Number(id));

  async function deleteById(id: number) {
    try {
      const res = await deleteCredential(id);
      
      if(res instanceof AxiosError) {
        toast(res.response?.data.message);
      } else {
        toast('Success');
        setCredentialsData(credentialsData.filter(c => c.id !== id));
        router.push('/credentials');
      }
    } catch (error) {
      toast('Error!');
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Credenciais</title>
      </Head>
      <main>
        <SubTitleBar title='Credenciais'/>
        {credential ? (
          <div className={styles.categoryContainer}>
            <h1>{credential.title}</h1>
            <div className={styles.paramContainer}>
              <div>
                <h2>URL:</h2>
                <p>{credential.url}</p>
              </div>

              <div>
                <h2>Usuário:</h2>
                <p>{credential.username}</p>
              </div>

              <div>
                <h2>Senha:</h2>
                <p>{credential.password}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>Ainda não possui dados</div>
        )}
        <div className={footerStyles.footerContainer}>
          <Link href='/credentials'>
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

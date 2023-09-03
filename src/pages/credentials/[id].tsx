import { useCredentialContext } from '@/hooks/useCredentialContext';
import styles from '../../components/styles/item.module.scss';
import { useRouter } from 'next/router';
import { SubTitleBar } from '@/components/SubtitleBar';
import Head from 'next/head';

export default function CredentialPage() {
  const router = useRouter();
  const { id } = router.query;
  const { credentialsData } = useCredentialContext();

  const credential = credentialsData.find((c) => c.id === Number(id));

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
      </main>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { login } from '@/services/authApi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUserContext } from '@/hooks/useUserContext';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';
import authStyles from '@/components/styles/authStyles.module.scss';

export default function Login() {
  const [form, setForm] = useState({'email': '', 'password': ''});
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { userData, setUserData } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    if(userData && userData.token) {
      router.push('/');
    }
  }, [userData, router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = await login(form.email, form.password);
      setUserData(userData);
      setIsAuthorized(true);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error : any) {
      toast(error.response.data.message)
      setIsLoading(false);
    }
  }

  function validateEmail(email: string) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
  
  return (
    <>
    <Head>
      <title>DrivenPass - Entre ou cadastre-se!</title>
    </Head>
    <main className={authStyles.registerLoginContainer}>
      <div className={authStyles.logoContainer}>
        {!isAuthorized ? <GiPadlock/> : <GiPadlockOpen/>}
        <h1>DrivenPass</h1>
      </div>

      <form className={authStyles.formContainer} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form.email}
          disabled={isLoading}
          required
          pattern={validateEmail(form.email) ? undefined : "[^\\s]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"}
          title="Insira um email válido"
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={form.password}
          disabled={isLoading}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Acessar"}
        </button>
      </form>
      
      <div className={authStyles.switch_to_login}>
        <Link href='register'>
          <h1>Ainda não tem uma conta? Cadastre-se!</h1>
        </Link>
      </div>
    </main>
    </>
  )
}
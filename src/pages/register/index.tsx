import { useEffect, useState } from 'react';
import authStyles from '@/components/styles/authStyles.module.scss';
import { GiPadlock } from 'react-icons/gi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { register } from '@/services/authApi';
import useToken from '@/hooks/useToken';

export default function Register() {
  const [form, setForm] = useState({'email': '', 'password': ''});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const token = useToken();

  useEffect(() => {
    if(token) {
      router.push('/');
    }
  }, [token, router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await register(form.email, form.password);
      toast('Cadastro feito com sucesso!');
      router.push('/login');
    } catch (error: any) {
      toast(error.response.data.message)
      setIsLoading(false);
    }
  }

  function validateEmail(email: string) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  function validatePassword(password: string) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{10,}$/;
    return passwordRegex.test(password);
  }

  
  return(
    <>
    <Head>
      <title>DrivenPass - Entre ou cadastre-se!</title>
    </Head>
    <main className={authStyles.registerLoginContainer}>
      <div className={authStyles.logoContainer}>
        <GiPadlock/>
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
          pattern={validatePassword(form.password) ? undefined : "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{10,}$"}
          title="A senha deve ter pelo menos: 10 caracteres, 1 caractere especial, 1 letra maiúscula, 1 letra minúscula e 1 número"
          />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Cadastrar"}
        </button>
      </form>

      <div className={authStyles.switch_to_login}>
        <Link href='login'>
          <h1>Já tem uma conta? Faça login!</h1>
        </Link>
      </div>
    </main>
    </>
  )
}
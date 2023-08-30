import authStyles from '@/components/styles/authStyles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi'

export default function Login() {
  const [form, setForm] = useState({'email': '', 'password': ''});
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    //TODO: enviar form
    setIsAuthorized(true);
  }

  function validateEmail(email: string) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }
  
  return (
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
  )
}
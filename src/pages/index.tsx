import { SubTitleBar } from "@/components/SubtitleBar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Driven Pass - Organizando suas senhas</title>
      </Head>
      <main>
        <SubTitleBar title='Credenciais'/>
        <h1>Home</h1>
      </main>
    </>
  )
}

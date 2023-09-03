import { useRouter } from 'next/router';

export default function CredentialPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Credential ID: {id}</h1>
      {/* Renderize as informações da credencial aqui */}
    </div>
  );
}

import useAsync from '../useAsync';
import useToken from '../useToken';
import * as credentialApi from '@/services/credentialApi';

export default function useCreateCredentials() {
  const token = useToken();

  const {
    data: credential,
    loading: credentialLoading,
    error: credentialError,
    act: createCredential
  } = useAsync((body: credentialApi.CredentialBody) => credentialApi.createCredential(token, body), false);

  return {
    credential,
    credentialLoading,
    credentialError,
    createCredential
  };
}

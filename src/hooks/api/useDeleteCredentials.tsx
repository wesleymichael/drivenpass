import useAsync from '../useAsync';
import useToken from '../useToken';
import * as credentialApi from '@/services/credentialApi';

export default function useDeleteCredential() {
  const token = useToken();

  const {
    data: credential,
    loading: credentialLoading,
    error: credentialError,
    act: deleteCredential
  } = useAsync((id: number) => credentialApi.deleteCredential(token, id), false);

  return {
    credential,
    credentialLoading,
    credentialError,
    deleteCredential
  };
}

import useAsync from '../useAsync';
import useToken from '../useToken';
import * as credentialApi from '../../services/credentialApi';

export default function useGetCredentials() {
  const token = useToken();

  const {
    data: credentials,
    loading: credentialsLoading,
    error: credentialsError,
    act: getCredentials
  } = useAsync(() => credentialApi.getCredentials(token));

  return {
    credentials,
    credentialsLoading,
    credentialsError,
    getCredentials
  };
}

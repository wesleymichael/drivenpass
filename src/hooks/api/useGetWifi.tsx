import useAsync from '../useAsync';
import useToken from '../useToken';
import * as wifiApi from '../../services/wifiApi';

export default function useGetWifi() {
  const token = useToken();

  const {
    data: wifis,
    loading: wifiLoading,
    error: wifiError,
    act: getWifis
  } = useAsync(() => wifiApi.getWifis(token));

  return {
    wifis,
    wifiLoading,
    wifiError,
    getWifis
  };
}
import useAsync from '../useAsync';
import useToken from '../useToken';
import * as wifiApi from '../../services/wifiApi';

export default function useGetWifi() {
  const token = useToken();

  const {
    data: wifi,
    loading: wifiLoading,
    error: wifiError,
    act: getWifi
  } = useAsync(() => wifiApi.getWifi(token));

  return {
    wifi,
    wifiLoading,
    wifiError,
    getWifi
  };
}
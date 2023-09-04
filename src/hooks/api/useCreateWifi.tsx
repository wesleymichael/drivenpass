import useAsync from '../useAsync';
import useToken from '../useToken';
import * as wifisApi from '@/services/wifiApi';

export default function useCreateWifi() {
  const token = useToken();

  const {
    data: wifi,
    loading: wifiLoading,
    error: wifiError,
    act: createWifi
  } = useAsync((body: wifisApi.WifiBody) => wifisApi.createWifi(token, body), false);

  return {
    wifi,
    wifiLoading,
    wifiError,
    createWifi
  };
}

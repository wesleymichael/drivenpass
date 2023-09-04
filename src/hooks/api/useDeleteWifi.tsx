import useAsync from '../useAsync';
import useToken from '../useToken';
import * as wifiApi from '@/services/wifiApi';

export default function useDeleteWifi() {
  const token = useToken();

  const {
    data: wifi,
    loading: wifiLoading,
    error: wifiError,
    act: deleteWifi
  } = useAsync((id: number) => wifiApi.deleteWifi(token, id), false);

  return {
    wifi,
    wifiLoading,
    wifiError,
    deleteWifi
  };
}

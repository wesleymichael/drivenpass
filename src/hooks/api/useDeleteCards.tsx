import useAsync from '../useAsync';
import useToken from '../useToken';
import * as cardsApi from '@/services/cardsApi';

export default function useDeleteCards() {
  const token = useToken();

  const {
    data: cards,
    loading: cardsLoading,
    error: cardsError,
    act: deleteCards
  } = useAsync((id: number) => cardsApi.deleteCards(token, id), false);

  return {
    cards,
    cardsLoading,
    cardsError,
    deleteCards
  };
}

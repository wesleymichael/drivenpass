import useAsync from '../useAsync';
import useToken from '../useToken';
import * as cardsApi from '../../services/cardsApi';

export default function useGetCards() {
  const token = useToken();

  const {
    data: cards,
    loading: cardsLoading,
    error: cardsError,
    act: getCards
  } = useAsync(() => cardsApi.getCards(token));

  return {
    cards,
    cardsLoading,
    cardsError,
    getCards
  };
}

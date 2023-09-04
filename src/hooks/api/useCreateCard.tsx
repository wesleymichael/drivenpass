import useAsync from '../useAsync';
import useToken from '../useToken';
import * as cardsApi from '@/services/cardsApi';

export default function useCreateCard() {
  const token = useToken();

  const {
    data: card,
    loading: cardLoading,
    error: cardError,
    act: createCard
  } = useAsync((body: cardsApi.CardBody) => cardsApi.createCard(token, body), false);

  return {
    card,
    cardLoading,
    cardError,
    createCard
  };
}
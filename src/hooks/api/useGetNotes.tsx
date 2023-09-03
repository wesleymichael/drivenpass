import useAsync from '../useAsync';
import useToken from '../useToken';
import * as notesApi from '../../services/notesApi';

export default function useGetNotes() {
  const token = useToken();

  const {
    data: notes,
    loading: notesLoading,
    error: notesError,
    act: getNotes
  } = useAsync(() => notesApi.getNotes(token));

  return {
    notes,
    notesLoading,
    notesError,
    getNotes
  };
}
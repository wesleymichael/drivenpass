import useAsync from '../useAsync';
import useToken from '../useToken';
import * as noteApi from '@/services/notesApi';

export default function useDeleteNote() {
  const token = useToken();

  const {
    data: note,
    loading: noteLoading,
    error: noteError,
    act: deleteNote
  } = useAsync((id: number) => noteApi.deleteNote(token, id), false);

  return {
    note,
    noteLoading,
    noteError,
    deleteNote
  };
}

import useAsync from '../useAsync';
import useToken from '../useToken';
import * as notesApi from '@/services/notesApi';

export default function useCreateNote() {
  const token = useToken();

  const {
    data: note,
    loading: noteLoading,
    error: noteError,
    act: createNote
  } = useAsync((body: notesApi.NoteBody) => notesApi.createNote(token, body), false);

  return {
    note,
    noteLoading,
    noteError,
    createNote
  };
}

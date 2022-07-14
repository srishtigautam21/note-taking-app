import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNote } from "./NoteContext";
import { deleteNoteToast } from "../utils/toastify";

const DeleteContext = createContext({});

const DeleteProvider = ({ children }) => {
  const { setNotes } = useNote();
  const [deletedNotes, setDeletedNotes] = useState([]);

  const moveToTrash = (note) => {
    setDeletedNotes((prev) => [...prev, note]);
  };
  const deleteNoteApiCall = async (notesId, note) => {
    const encodedToken = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.delete(`/api/notes/${notesId}`, config);
      setNotes(response.data.notes);
      deleteNoteToast("Note deleted & sent to trash");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DeleteContext.Provider
      value={{
        moveToTrash,
        deletedNotes,
        deleteNoteApiCall,
        setDeletedNotes,
      }}
    >
      {children}
    </DeleteContext.Provider>
  );
};
const useDeleteNote = () => useContext(DeleteContext);
export { DeleteProvider, useDeleteNote };

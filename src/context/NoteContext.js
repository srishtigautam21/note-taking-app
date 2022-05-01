import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const encodedToken = localStorage.getItem("token");
      const config = { headers: { authorization: encodedToken } };
      const response = await axios.get("/api/notes", config);
      setNotes(response.data.notes);
    })();
  }, []);

  const addNotes = async (note) => {
    const encodedToken = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.post("/api/notes", { note }, config);
      setNotes(response.data.notes);
    } catch (e) {
      console.log(e);
    }
  };
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        addNotes,
        notes,
        moveToTrash,
        deletedNotes,
        deleteNoteApiCall,
        setDeletedNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { createUpdateNoteToast } from "../utils/toastify";

const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const initialState = {
    title: "",
    tags: "",
    priority: "",
    mainContent: "",
    date: "",
    noteColor: "#f9fafb",
  };

  const [noteContent, setNoteContent] = useState(initialState);
  const [editNote, setEditNote] = useState(initialState);
  const contentOnEditNote = (_id) => {
    const Obj = notes.find((note) => note._id === _id);
    setEditNote(Obj);
  };
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
      console.error(e);
    }
  };
  const updateNote = async (editNote) => {
    const encodedToken = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.post(
        `/api/notes/${editNote._id}`,
        { note: editNote },
        config
      );
      setNotes(response.data.notes);
      setEditNote(initialState);
      createUpdateNoteToast("Note Updated");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        addNotes,
        notes,
        setNotes,
        noteContent,
        setNoteContent,
        initialState,
        contentOnEditNote,
        editNote,
        setEditNote,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };

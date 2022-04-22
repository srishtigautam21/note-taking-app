import { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthContext";
import axios from "axios";

const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  // const { token } = useAuth();
  // const reducerFunction = (state, action) => {
  //   switch (action.type) {
  //     case "GET_NOTES":
  //       return {
  //         ...state,
  //         notes: action.payload,
  //       };
  //     case "ADD_NOTES":
  //       return { ...state, notes: action.payload };
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducerFunction, {
  //   notes: [],
  // });
  useEffect(() => {
    (async () => {
      const encodedToken = localStorage.getItem("token");
      const config = { headers: { authorization: encodedToken } };
      const response = await axios.get("/api/notes", config);
      // dispatch({ type: "GET_NOTES", payload: response.data.notes });
      setNotes(response.data.notes);
      console.log(response.data.notes);
    })();
  }, []);
  // const getNotes = async () => {
  //   const encodedToken = localStorage.getItem("token");
  //   const config = { headers: { authorization: encodedToken } };
  //   try {
  //     const response = await axios.get("/api/notes", config);
  //     dispatch({ type: "GET_NOTES", payload: response.data.notes });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const addNotes = async (note) => {
    console.log("notes content", note);
    const encodedToken = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: encodedToken,
      },
    };
    try {
      const response = await axios.post("/api/notes", { note }, config);
      // dispatch({ type: "ADD_NOTES", payload: response.data.notes });
      setNotes(response.data.notes);
      console.log(response.data.notes);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NoteContext.Provider value={{ addNotes, notes }}>
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { NoteProvider, useNote };

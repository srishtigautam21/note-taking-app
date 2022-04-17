import { createContext, useContext,useReducer } from "react";
import { useAuth } from "./AuthContext";
import axios from axios;
const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const { token } = useAuth();
  const reducerFunction=(state,action)=>{
    switch(action.type){
      case "ADD_NOTE":
        return {...state,
        notes:action.payload}
      default:
        return state;

    }
  }
  const[state,dispatch]=useReducer(reducerFunction,{
    notes:[]
  })
  const addNote= async (note)=>{
    const encodedToken=localStorage.getItem("token")
    const config={headers:{
      authorization:encodedToken
    }}
    try{
    const response=await axios.post("/api/notes",{note},config);
    dispatch({type:"ADD_NOTE",payload:response.data.notes})
    }catch(e){
      console.log(e)
    }
  }
  return <NoteContext.Provider>{children}</NoteContext.Provider>;
};
const useAddNote = () => useContext(NoteContext);
export { NoteProvider, useAddNote };

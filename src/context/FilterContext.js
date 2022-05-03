import { useContext, createContext, useReducer, useEffect } from "react";

import { useNote } from "./NoteContext";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const { notes } = useNote();
  //   console.log(notes);
  const initialState = {
    sortByDate: "none",
    sortByTags: [],
    sortByPriority: "none",
    updatedNotesList: notes,
  };
  useEffect(() => {
    // console.log("useEffect in filter", notes);
    filterDispatch({ type: "INITIALIZER", payload: notes });
  }, [notes]);

  const [filterState, filterDispatch] = useReducer((state, action) => {
    // console.log("inreducer", action.payload, state);
    switch (action.type) {
      case "INITIALIZER":
        return {
          ...state,
          updatedNotesList: action.payload,
        };
      case "SORT_BY_DATE":
        return {
          ...state,
          sortByDate: action.payload,
        };
      case "SORT_BY_PRIORITY":
        return {
          ...state,
          sortByPriority: action.payload,
        };
      case "SORT_BY_TAGS":
        return {
          ...state,
          sortByTags: state.sortByTags.includes(action.payload)
            ? state.sortByTags.filter((i) => i !== action.payload)
            : [...state.sortByTags, action.payload],
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <FilterContext.Provider
      value={{ initialState, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };

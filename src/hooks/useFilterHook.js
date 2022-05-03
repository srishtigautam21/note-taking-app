import { useFilter } from "../context";

const useFilterHook = () => {
  const { filterState } = useFilter();

  const { sortByDate, sortByTags, sortByPriority, updatedNotesList } =
    filterState;

  const filteredData = [...updatedNotesList];

  //   const getFilterByTags=(notesArr,tags)=>{

  //   }

  const filterByTags = getFilterByTags(filteredData, sortByTags);
  const filterByPriority = getFilterByPriority(filterByTags, sortByPriority);
  const filterByDate = getFilterByDate(filterByPriority, sortByDate);
  if (filterByDate.length === 0) {
    return updatedNotesList;
  }
  return filterByDate;
};
export { useFilterHook };

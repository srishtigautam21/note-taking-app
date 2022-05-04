import { useFilter, useNote } from "../context";

const useFilterHook = () => {
  const { filterState } = useFilter();
  const { notes } = useNote();

  const { sortByDate, sortByTags, sortByPriority } = filterState;

  const filteredData = [...notes];

  const getFilterByTags = (notesArr, tags) => {
    if (tags.length > 0) {
      return notesArr.filter((note) => tags.includes(note.tags));
    } else {
      return notesArr;
    }
  };

  const getFilterByPriority = (notesArr, selectedPriority) =>
    selectedPriority !== "" && selectedPriority !== "none"
      ? notesArr.filter(
          (note) => note.priority.toLowerCase() === selectedPriority
        )
      : notesArr;

  const getFilterByDate = (notesArr, date) => {
    if (date === "oldToNew") {
      let sortedNotes = [...notesArr].sort((a, b) => {
        let firstDate = new Date(a.date);
        let lastDate = new Date(b.date);
        return firstDate.getTime() - lastDate.getTime();
      });
      return sortedNotes;
    } else if (date === "newToOld") {
      let sortedNotes = [...notesArr].sort((a, b) => {
        let firstDate = new Date(a.date);
        let lastDate = new Date(b.date);
        return lastDate.getTime() - firstDate.getTime();
      });
      return sortedNotes;
    } else {
      return notesArr;
    }
  };

  const filterByTags = getFilterByTags(filteredData, sortByTags);
  const filterByPriority = getFilterByPriority(filterByTags, sortByPriority);
  const filterByDate = getFilterByDate(filterByPriority, sortByDate);

  if (filterByDate === undefined || filterByDate.length === 0) {
    return notes;
  }
  return filterByDate;
};

export { useFilterHook };

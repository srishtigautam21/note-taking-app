import { DeleteIcon, UndoIcon } from "../../Asset/Svg/allsvg";
import "./trashNote.css";
import { useNote, useDeleteNote } from "../../context";

const TrashNote = ({ deletedNotes }) => {
  const { title, priority, tags, mainContent, _id, date } = deletedNotes;
  const { addNotes } = useNote();
  const { setDeletedNotes } = useDeleteNote();

  const deleteNotefromTrash = (noteId) => {
    setDeletedNotes((prev) => prev.filter((note) => note._id !== noteId));
  };

  return (
    <div className='add-saved-note'>
      <div className='note-title'>
        {title}
        <div className='tag-chips'># {tags}</div>
      </div>
      <div className='note-text'>{mainContent}</div>
      <div className='date-priority'>
        <div>{date}</div>
        <div className='priority-chips'>{priority}</div>
      </div>
      <div className='button-display'>
        <button
          className='note-btn tooltip'
          onClick={() => {
            addNotes(deletedNotes);
            deleteNotefromTrash(_id);
          }}
        >
          <UndoIcon />
          <span className='tooltiptext'>Undo</span>
        </button>
        <button
          className='note-btn tooltip'
          onClick={() => deleteNotefromTrash(_id)}
        >
          <DeleteIcon />
          <span className='tooltiptext'>Delete note</span>
        </button>
      </div>
    </div>
  );
};
export { TrashNote };

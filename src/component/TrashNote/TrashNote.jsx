import { DeleteIcon, ArchiveIcon, UndoIcon } from "../../Asset/Svg/allsvg";
import "./trashNote.css";
import { useNote } from "../../context/NoteContext";

const TrashNote = ({ deletedNotes }) => {
  const { title, priority, tags, mainContent, _id } = deletedNotes;
  const { addNotes, setDeletedNotes } = useNote();
  const deleteNotefromTrash = (noteId) => {
    setDeletedNotes((prev) => prev.filter((note) => note._id !== noteId));
  };
  return (
    // <div className='trash-container'>
    <div className='add-saved-note'>
      <div className='note-title'>
        {title}
        <div className='tag-chips'># {tags}</div>
      </div>
      <div className='note-text'>{mainContent}</div>
      <div className='date-priority'>
        <div>17/04/22</div>
        <div className='priority-chips'>{priority}</div>
      </div>
      <div className='button-display'>
        <button
          className='note-btn'
          onClick={() => {
            addNotes(deletedNotes);
            deleteNotefromTrash(_id);
          }}
        >
          <UndoIcon />
        </button>
        <button className='note-btn' onClick={() => deleteNotefromTrash(_id)}>
          <DeleteIcon />
        </button>
        <button className='note-btn'>
          <ArchiveIcon />
        </button>
      </div>
    </div>
    // </div>
  );
};
export { TrashNote };

import "./savedNote.css";
import { DeleteIcon, ArchiveIcon, EditIcon } from "../../Asset/Svg/allsvg";
// import { useNote } from "../../context/NoteContext";
import { useDeleteNote } from "../../context";

const SavedNote = ({ note }) => {
  const { title, priority, tags, mainContent, _id } = note;
  // const { deleteNoteApiCall, moveToTrash } = useNote();
  const { deleteNoteApiCall, moveToTrash } = useDeleteNote();
  return (
    <div>
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
            className='note-btn tooltip'
            onClick={() => {
              moveToTrash(note);
              deleteNoteApiCall(_id, note);
            }}
          >
            <DeleteIcon />
            <span className='tooltiptext'>Delete note</span>
          </button>
          <button
            className='note-btn tooltip'
            // onClick={() => moveToArchive(_id, note)}
          >
            <ArchiveIcon />
            <span className='tooltiptext'>Archive note</span>
          </button>
          <button className='note-btn tooltip'>
            <EditIcon />
            <span className='tooltiptext'>Edit note</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export { SavedNote };

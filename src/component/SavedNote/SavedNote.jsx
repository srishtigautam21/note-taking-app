import "./savedNote.css";
import { DeleteIcon, ArchiveIcon, EditIcon } from "../../Asset/Svg/allsvg";

const SavedNote = ({ note }) => {
  const { title, priority, tags, mainContent } = note;
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
          <button className='note-btn'>
            <DeleteIcon />
          </button>
          <button className='note-btn'>
            <ArchiveIcon />
          </button>
          <button className='note-btn'>
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export { SavedNote };

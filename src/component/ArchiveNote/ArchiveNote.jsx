import { useDeleteNote, useArchive } from "../../context";
import { DeleteIcon, UndoIcon, EditIcon } from "../../Asset/Svg/allsvg";

const ArchiveNote = ({ archive }) => {
  const { moveToTrash } = useDeleteNote();
  const { restoreArchiveNote, deleteArchive } = useArchive();
  const { title, priority, tags, mainContent, _id, date, noteColor } = archive;

  return (
    <div>
      <div style={{ backgroundColor: noteColor }} className='add-saved-note'>
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
            onClick={() => restoreArchiveNote(_id)}
          >
            <UndoIcon />
            <span className='tooltiptext'>Restore</span>
          </button>
          <button
            className='note-btn tooltip'
            onClick={() => {
              moveToTrash(archive);
              deleteArchive(_id);
            }}
          >
            <DeleteIcon />
            <span className='tooltiptext'>Delete note</span>
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
export { ArchiveNote };

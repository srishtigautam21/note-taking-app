import "./savedNote.css";
import { DeleteIcon, ArchiveIcon, EditIcon } from "../../Asset/Svg/allsvg";
import { useDeleteNote, useArchive, useNote } from "../../context";
import { EditNote } from "../index";
import { useState } from "react";
// import { colorsData } from "../Note/ColorData";
const SavedNote = ({ note }) => {
  const { contentOnEditNote } = useNote();
  const { title, priority, tags, mainContent, _id, date, noteColor } = note;
  const { deleteNoteApiCall, moveToTrash } = useDeleteNote();
  const { moveToArchive } = useArchive();

  const [openModal, setOpenModal] = useState(false);
  // const [colorOpen, setColorOpen] = useState(false);
  const editNoteFunc = (_id) => {
    setOpenModal((open) => !open);
    contentOnEditNote(_id);
  };
  // const colorHandler = (color) => {
  //   setNoteContent({ ...noteContent, noteColor: color });
  // };
  return (
    <div>
      <div style={{ backgroundColor: noteColor }} className='add-saved-note'>
        <div className='note-title'>
          {title}
          <div className='tag-chips'># {tags}</div>
        </div>
        <div className='note-text'>{mainContent}</div>
        <div className='date-priority'>
          <div className='pd-top'>{date}</div>
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
            onClick={() => moveToArchive(_id, note)}
          >
            <ArchiveIcon />
            <span className='tooltiptext'>Archive note</span>
          </button>
          <button
            className='note-btn tooltip'
            onClick={
              () => editNoteFunc(_id)
              // <EditNote key={note._id} note={note} open={openModal} />;
            }
          >
            <EditIcon />
            <span className='tooltiptext'>Edit note</span>
          </button>
          {openModal && <EditNote setOpenModal={setOpenModal} _id={_id} />}
          {/* <EditNote key={note._id} note={note} open={openModal}> */}
          {/* hello
          </EditNote> */}
          {/* <button
            className='color-pallete'
            onClick={() => setColorOpen((open) => !open)}
          >
            <ColorPallete />
          </button>
          {colorOpen && (
            <div className='color-container'>
              <div className='color-container-row'>
                {colorsData.map((color, index) => (
                  <div
                    key={index}
                    className='color'
                    style={{ backgroundColor: color.color }}
                    onClick={() => colorHandler(color.color)}
                  ></div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
export { SavedNote };

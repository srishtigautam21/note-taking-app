import "./note.css";
import { useState } from "react";

const AddNote = () => {
  const [isNoteVisible, setIsNoteVisisble] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <div className='top-margin center-align'>
      {isNoteVisible ? (
        <div className='add-note border'>
          <input
            className='no-border-note pd-md'
            placeholder='Title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='no-border-note pd-md'
            placeholder='Add Note...'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* {title !== "" && text !== "" ? (
            <button className='no-border-note save-btn'>Save</button>
          ) : (
            <>
              <p>Add discription and title</p> */}
          <button className='no-border-note save-btn' onClick={() => AddNote()}>
            Save
          </button>
          {/* </>
          )} */}
        </div>
      ) : (
        <button
          onClick={() => setIsNoteVisisble((note) => !note)}
          //   className='button-style'
        >
          Create New Note
        </button>
      )}
    </div>
  );
};
export { AddNote };

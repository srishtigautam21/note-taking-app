import "./note.css";
import { useState } from "react";
import { useNote } from "../../context/NoteContext";

const AddNote = () => {
  const { addNotes } = useNote();
  const [isNoteVisible, setIsNoteVisisble] = useState(false);
  const initialState = {
    title: "",
    tags: "",
    priority: "",
    mainContent: "",
  };
  const [noteContent, setNoteContent] = useState(initialState);
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");
  return (
    <div className='top-margin center-align'>
      {isNoteVisible ? (
        <div className='add-note border'>
          <div className='input-container input-margin'>
            <label htmlFor='input-title'>
              Title:
              <input
                id='input-title'
                className='border-note sm-pd title-input '
                placeholder='Title'
                type='text'
                value={noteContent.title}
                onChange={(e) =>
                  setNoteContent((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </label>
            <label htmlFor='input-tags'>
              Tags:
              <select
                id='input-tags'
                name='tags'
                className='border-note sm-pd tags'
                placeholder='Add Tags'
                value={noteContent.tags}
                onChange={(e) =>
                  setNoteContent((prev) => ({ ...prev, tags: e.target.value }))
                }
              >
                <option value='none'>None</option>
                <option value='work'>Work</option>
                <option value='health'>Health</option>
                <option value='exercise'>Exercise</option>
                <option value='chores'>Chores</option>
              </select>
            </label>
            <label htmlFor='input-priority'>
              Priority:
              <select
                id='input-priority'
                name='priority'
                className='border-note sm-pd priority'
                placeholder='Add Priority'
                value={noteContent.priority}
                onChange={(e) =>
                  setNoteContent((prev) => ({
                    ...prev,
                    priority: e.target.value,
                  }))
                }
              >
                <option value='none'>None</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
              </select>
            </label>
          </div>
          <textarea
            className='no-border pd-md'
            placeholder='Add Note...'
            type='text'
            value={noteContent.mainContent}
            onChange={(e) =>
              setNoteContent((prev) => ({
                ...prev,
                mainContent: e.target.value,
              }))
            }
          />
          {/* {title !== "" && text !== "" ? (
            <button className='no-border-note save-btn'>Save</button>
          ) : (
            <>
              <p>Add discription and title</p> */}
          <button
            className='no-border save-btn'
            onClick={() => {
              addNotes(noteContent);
              setIsNoteVisisble((note) => !note);
              setNoteContent(initialState);
            }}
          >
            Save
          </button>
          {/* </>
          )} */}
        </div>
      ) : (
        <button
          onClick={() => setIsNoteVisisble((note) => !note)}
          className='note-button-style'
        >
          Create New Note
        </button>
      )}
    </div>
  );
};
export { AddNote };

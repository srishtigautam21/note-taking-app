import "./note.css";
import { useState, useEffect } from "react";
import { useNote } from "../../context/NoteContext";
import { ColorPallete, SaveIcon } from "../../Asset/Svg/allsvg";
import { colorsData } from "./ColorData.jsx";

const AddNote = () => {
  const { addNotes, noteContent, setNoteContent, initialState } = useNote();
  const [isNoteVisible, setIsNoteVisisble] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const colorHandler = (color) => {
    setNoteContent({ ...noteContent, noteColor: color });
  };
  const current = new Date();
  const date = current.toLocaleString();
  useEffect(() => {
    setNoteContent((prev) => ({ ...prev, date: date }));
    // eslint-disable-next-line
  }, [date]);

  return (
    <div className='top-margin center-align'>
      {isNoteVisible ? (
        <div
          style={{ backgroundColor: noteContent.noteColor }}
          className='add-note border'
        >
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
            className='no-border pd-md input-margin'
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
          <div className='note-footer'>
            <button
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
            )}
          </div>
          {noteContent.title === "" ||
          noteContent.tags === "" ||
          noteContent.priority === "" ? (
            <>
              <button className='no-border disable-btn save-icon'>Save</button>
              <button className='no-border no-display mediaquery-save-icon disable-save-icon'>
                <SaveIcon />
              </button>
            </>
          ) : (
            <>
              <button
                className='no-border save-btn save-icon'
                onClick={() => {
                  addNotes(noteContent);
                  setIsNoteVisisble((note) => !note);
                  setNoteContent(initialState);
                }}
              >
                Save
              </button>
              <button
                className='no-border no-display mediaquery-save-icon'
                onClick={() => {
                  addNotes(noteContent);
                  setIsNoteVisisble((note) => !note);
                  setNoteContent(initialState);
                }}
              >
                <SaveIcon />
              </button>
            </>
          )}
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

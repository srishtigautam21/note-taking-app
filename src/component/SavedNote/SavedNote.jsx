import "./savedNote.css";

const SavedNote = () => {
  return (
    <div>
      <div className='add-saved-note '>
        <input
          className='no-border-note pd-md'
          placeholder='Title'
          type='text'
        />
        <textarea
          className='no-border-note pd-md'
          placeholder='Add Note...'
          type='text'
        />
        <button>delete</button>
        <button>Archive</button>
        <button>Edit</button>
        {/* <button className='no-border-note save-btn'>Save</button> */}
      </div>
    </div>
  );
};
export { SavedNote };

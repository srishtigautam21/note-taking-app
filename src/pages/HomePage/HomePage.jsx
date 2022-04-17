// import { useState } from "react";
import { AddNote, Navbar, Sidebar, SavedNote } from "../../component";
import "./homePage.css";

const HomePage = () => {
  // const [isNoteVisible, setIsNoteVisisble] = useState(false);
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content main-display'>
          {/* {isNoteVisible ? ( */}
          <AddNote />
          <div className='inner-container'>
            <SavedNote />
          </div>

          {/* ) : (
            <button
              onClick={() => setIsNoteVisisble((note) => !note)}
              className='button-style'
            >
              Create New Note
            </button>
          )} */}
        </div>
      </div>
    </>
  );
};
export { HomePage };

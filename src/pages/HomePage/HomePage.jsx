import { AddNote, Navbar, Sidebar, SavedNote } from "../../component";
import "./homePage.css";

import { useFilterHook } from "../../hooks/useFilterHook";

const HomePage = () => {
  const filterByDate = useFilterHook();

  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content main-display'>
          <AddNote />
          <div className='inner-container'>
            <div className='note-list'>
              {filterByDate.map((note) => {
                return <SavedNote key={note._id} note={note} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { HomePage };

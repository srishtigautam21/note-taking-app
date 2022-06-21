import { AddNote, Navbar, Sidebar, SavedNote, Modal } from "../../component";
import "./homePage.css";
import { Filter } from "../../Asset/Svg/allsvg";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useFilterHook } from "../../hooks/useFilterHook";
import { useState } from "react";

const HomePage = () => {
  const filterByDate = useFilterHook();
  const [modal, setModal] = useState(false);
  useDocumentTitle("HomePage");
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='filter-icon filter-icon-mediaquery'>
          <button onClick={() => setModal(true)}>
            <Filter />
          </button>
        </div>
        <div className='main-content main-display'>
          <AddNote />
          <div className='inner-container'>
            <div className='note-list'>
              {filterByDate.map((note) => (
                <SavedNote key={note._id} note={note} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
};
export { HomePage };

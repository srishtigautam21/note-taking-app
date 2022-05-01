import { Navbar, Sidebar, TrashNote } from "../../component";
// import { useNote } from "../../context/NoteContext";
import { useDeleteNote } from "../../context";
import "./trash.css";

const Trash = () => {
  // const { deletedNotes } = useNote();
  const { deletedNotes } = useDeleteNote();

  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>
          <h1 className='trash-heading'>Trash</h1>
          <div className='trash-container'>
            {deletedNotes.map((note) => {
              return <TrashNote key={note._id} deletedNotes={note} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export { Trash };

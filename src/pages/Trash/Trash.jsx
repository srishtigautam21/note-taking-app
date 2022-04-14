import { Navbar, Sidebar } from "../../component";

const Trash = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>Trash</div>
        <div className='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { Trash };

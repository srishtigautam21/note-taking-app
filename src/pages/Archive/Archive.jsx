import { Navbar, Sidebar } from "../../component";

const Archive = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>Archive</div>
        <div className='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { Archive };

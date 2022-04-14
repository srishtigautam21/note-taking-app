import { Navbar, Sidebar } from "../../component";

const Labels = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content'>Labels</div>
        <div className='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { Labels };

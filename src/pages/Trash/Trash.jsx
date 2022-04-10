import { Navbar, Sidebar } from "../../component";

const Trash = () => {
  return (
    <>
      <div class='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div class='main-content'>Trash</div>
        <div class='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { Trash };

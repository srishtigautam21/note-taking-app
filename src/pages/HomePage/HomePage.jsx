// import { Navbar } from "../../component/Navbar/Navbar";
// import { Sidebar } from "../../component/Sidebar/Sidebar";
import { Navbar, Sidebar } from "../../component";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div class='home-page grid-container'>
        {/* <div class='navbar'>My notes</div> */}
        <Navbar />
        <Sidebar />
        {/* <div class='sidebar'>
          <p>Home</p>
          <p>Labels</p>
          <p>Trash</p>
          <p>Archive</p>
        </div> */}
        <div class='main-content'>Main</div>
        <div class='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { HomePage };

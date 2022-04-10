// import { Navbar } from "../../component/Navbar/Navbar";
// import { Sidebar } from "../../component/Sidebar/Sidebar";
import { Navbar, Sidebar } from "../../component";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />

        <div className='main-content'>Main</div>
        <div className='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { HomePage };

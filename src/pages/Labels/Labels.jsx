import { Navbar, Sidebar } from "../../component";

const Labels = () => {
  return (
    <>
      <div class='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div class='main-content'>Labels</div>
        <div class='main-footer'>Footer</div>
      </div>
    </>
  );
};
export { Labels };

import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className='sidebar md-pd'>
        <Link to='/homePage'>
          <h2 className='md-pd sidebar-heading'>Home</h2>
        </Link>
        <Link to='/labels'>
          <h2 className='md-pd sidebar-heading'>Labels</h2>
        </Link>
        <Link to='/archive'>
          <h2 className='md-pd sidebar-heading'>Archive</h2>
        </Link>
        <Link to='/trash'>
          <h2 className='md-pd sidebar-heading'>Trash</h2>
        </Link>
        <button className='md-pd sidebar-heading'>Create New Note</button>
      </div>
    </>
  );
};
export { Sidebar };

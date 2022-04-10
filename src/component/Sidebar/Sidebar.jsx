import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "active-link md-pd aside-heading  "
      : "inactive-link md-pd aside-heading  ";
  };
  // const isActiveIcon = ({ isActive }) => {
  //   console.log(isActive);
  //   return isActive ? { backgroundColor: "green" } : { backgroundColor: "" };
  // };
  // `md-pd aside-heading`
  return (
    <>
      <div className='sidebar md-margin'>
        <NavLink
          to='/homePage'
          // style={isActiveIcon}
          className={activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to='/labels'
          // className={isActiveIcon}
          // style={({ isActive }) => (isActive ? activeStyle : "")}

          className={activeStyle}
        >
          Labels
        </NavLink>
        <NavLink to='/archive' className={activeStyle}>
          Archive
        </NavLink>
        <NavLink to='/trash' className={activeStyle}>
          Trash
        </NavLink>
        <button className='md-pd '>Create New Note</button>
      </div>
    </>
  );
};
export { Sidebar };

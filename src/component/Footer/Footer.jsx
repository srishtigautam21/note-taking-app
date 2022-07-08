import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "footer-active-link footer-md-pd aside-heading  "
      : "footer-inactive-link footer-md-pd aside-heading  ";
  };
  return (
    <div className='footer-icons'>
      <NavLink to='/homePage' className={activeStyle}>
        Home
      </NavLink>
      <NavLink to='/archive' className={activeStyle}>
        Archive
      </NavLink>
      <NavLink to='/trash' className={activeStyle}>
        Trash
      </NavLink>
    </div>
  );
};
export { Footer };

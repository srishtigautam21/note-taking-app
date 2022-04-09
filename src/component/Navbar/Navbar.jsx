import "./navbar.css";

import { UserIcon } from "../../Asset/Svg/allsvg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <Link className='component-libraryl-link' to='/'>
            My Notes
          </Link>
        </div>
        <li className='icons-alignment'>
          <Link className='link ecom-link-color' to='/homePage'>
            <UserIcon className='nav-icons' />
          </Link>
        </li>
      </nav>
    </div>
  );
};
export { Navbar };

import "./navbar.css";
import { useState } from "react";
import { UserIcon } from "../../Asset/Svg/allsvg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { isUserLoggedIn, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <Link className='component-libraryl-link' to='/'>
            Notet
          </Link>
        </div>
        <li className='icons-alignment'>
          <div className='dropdown'>
            <Link
              className='link ecom-link-color'
              to='/homePage'
              onClick={() => setOpen((visible) => !visible)}
            >
              <UserIcon className='nav-icons' />
            </Link>
            {open && (
              <div className='dropdown-menu'>
                {isUserLoggedIn ? (
                  <Link
                    className='link content-color'
                    to='/'
                    onClick={() => {
                      logOut();
                      setOpen((open) => !open);
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className='dropdown-content login-link' to='/login'>
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </li>
      </nav>
    </div>
  );
};
export { Navbar };

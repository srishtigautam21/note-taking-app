import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "active-link md-pd aside-heading  "
      : "inactive-link md-pd aside-heading  ";
  };

  return (
    <>
      <div className='sidebar md-margin'>
        <NavLink to='/homePage' className={activeStyle}>
          Home
        </NavLink>
        <NavLink to='/labels' className={activeStyle}>
          Labels
        </NavLink>
        <NavLink to='/archive' className={activeStyle}>
          Archive
        </NavLink>
        <NavLink to='/trash' className={activeStyle}>
          Trash
        </NavLink>
        <div>
          {/* <div className='aside-heading md-pd'>Filters</div> */}
          <div className='note-filter-sidebar md-pd'>
            <h3>Sort By Date</h3>
            <div className='filter'>
              <label className='filter-pd'>
                <input type='radio' className='filter-margin' />
                Sort from old to new
              </label>
              <label className='filter-pd'>
                <input type='radio' className='filter-margin' />
                Sort from new to old
              </label>
            </div>
            <h3>Sort By Tags</h3>
            <div className='filter'>
              <label className='filter-pd'>
                <input type='checkbox' className='filter-margin' />
                Work
              </label>
              <label className='filter-pd'>
                <input type='checkbox' className='filter-margin' />
                Health
              </label>
              <label className='filter-pd'>
                <input type='checkbox' className='filter-margin' />
                Exercise
              </label>
              <label className='filter-pd'>
                <input type='checkbox' className='filter-margin' />
                Chores
              </label>
            </div>
            <h3>Sort By Priority</h3>
            <div className='filter'>
              <label className='filter-pd'>
                <input type='radio' className='filter-margin' />
                High
              </label>
              <label className='filter-pd'>
                <input type='radio' className='filter-margin' />
                Medium
              </label>
              <label className='filter-pd'>
                <input type='radio' className='filter-margin' />
                Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Sidebar };

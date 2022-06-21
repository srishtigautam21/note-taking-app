import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useFilter, useNote } from "../../context";

const Sidebar = () => {
  const { filterDispatch, filterState, initialFilterState } = useFilter();
  const { notes } = useNote();
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "active-link md-pd aside-heading  "
      : "inactive-link md-pd aside-heading  ";
  };

  return (
    <>
      <div className='sidebar md-margin sidebar-mediaquery'>
        <NavLink to='/homePage' className={activeStyle}>
          Home
        </NavLink>
        <NavLink to='/archive' className={activeStyle}>
          Archive
        </NavLink>
        <NavLink to='/trash' className={activeStyle}>
          Trash
        </NavLink>
        <div>
          {/* Start of filter section */}
          {notes && (
            <div className='note-filter-sidebar md-pd'>
              <div className='clearAll-flex'>
                <h3>Sort By Date</h3>
                <p
                  className='clearAll'
                  onClick={() =>
                    filterDispatch({
                      type: "CLEAR_ALL",
                      payload: { ...initialFilterState },
                    })
                  }
                >
                  ClearAll
                </p>
              </div>
              <div className='filter'>
                <label className='filter-pd'>
                  <input
                    type='radio'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_DATE",
                        payload: "oldToNew",
                      })
                    }
                    checked={filterState.sortByDate === "oldToNew"}
                  />
                  Sort from old to new
                </label>
                <label className='filter-pd'>
                  <input
                    type='radio'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_DATE",
                        payload: "newToOld",
                      })
                    }
                    checked={filterState.sortByDate === "newToOld"}
                  />
                  Sort from new to old
                </label>
              </div>
              <h3>Sort By Tags</h3>
              <div className='filter'>
                <label className='filter-pd'>
                  <input
                    type='checkbox'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({ type: "SORT_BY_TAGS", payload: "work" })
                    }
                    checked={filterState.sortByTags.includes("work")}
                  />
                  Work
                </label>
                <label className='filter-pd'>
                  <input
                    type='checkbox'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_TAGS",
                        payload: "health",
                      })
                    }
                    checked={filterState.sortByTags.includes("health")}
                  />
                  Health
                </label>
                <label className='filter-pd'>
                  <input
                    type='checkbox'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_TAGS",
                        payload: "exercise",
                      })
                    }
                    checked={filterState.sortByTags.includes("exercise")}
                  />
                  Exercise
                </label>
                <label className='filter-pd'>
                  <input
                    type='checkbox'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_TAGS",
                        payload: "chores",
                      })
                    }
                    checked={filterState.sortByTags.includes("chores")}
                  />
                  Chores
                </label>
              </div>
              <h3>Sort By Priority</h3>
              <div className='filter'>
                <label className='filter-pd'>
                  <input
                    type='radio'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_PRIORITY",
                        payload: "high",
                      })
                    }
                    checked={filterState.sortByPriority === "high"}
                  />
                  High
                </label>
                <label className='filter-pd'>
                  <input
                    type='radio'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_PRIORITY",
                        payload: "medium",
                      })
                    }
                    checked={filterState.sortByPriority === "medium"}
                  />
                  Medium
                </label>
                <label className='filter-pd'>
                  <input
                    type='radio'
                    className='filter-margin'
                    onChange={() =>
                      filterDispatch({
                        type: "SORT_BY_PRIORITY",
                        payload: "low",
                      })
                    }
                    checked={filterState.sortByPriority === "low"}
                  />
                  Low
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { Sidebar };

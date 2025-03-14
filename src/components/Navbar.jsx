import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between px-6 items-center h-[10vh]">
      <ul className="flex list-none gap-7 p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createEvent"
            className={({ isActive }) => (isActive ? "selected-link" : "")}
          >
            Create Event
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5">
        <Link
          to="/signup"
          className="rounded-md px-3 pb-[3px] bg-[#4524ff] text-[#ffead7]"
        >
          SignUp
        </Link>
        <Link
          to="/signin"
          className="rounded-md px-3 pb-[3px] bg-[#ff2424] text-[#ffead7]"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

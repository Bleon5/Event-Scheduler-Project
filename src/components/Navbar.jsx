import { NavLink, Link } from "react-router-dom"
import { useEvn } from "../context/EventContext";

function Navbar() {
  const {token,isLoggedIn,setIsLoggedIn,navigate} = useEvn();
  
  // Sign out current user
  const handleSignout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
    navigate("/signin");
  };
  
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
        {token && isLoggedIn &&
          <li>
          <NavLink
            to="/createEvent"
            className={({ isActive }) => (isActive ? "selected-link" : "")}
          >
            Create Event
          </NavLink>
        </li>
        }
      </ul>
      <div className="flex gap-5">
        {!token && !isLoggedIn && 
        <Link
          to="/signup"
          className="rounded-md px-3 pb-[3px] bg-[#4524ff] text-[#ffead7]"
        >
          SignUp
        </Link> }
        {token && isLoggedIn ? 
          (<Link
          onClick={() => handleSignout()}
          className="rounded-md px-3 pb-[3px] bg-[#ff2424] text-[#ffead7]"
        >
          Sign Out
        </Link>)
         : (<Link
          to="/signin"
          className="rounded-md px-3 pb-[3px] bg-[#ff2424] text-[#ffead7]"
        >
          Sign In
        </Link>)}
      </div>
    </nav>
  );
}

export default Navbar;

import { NavLink,Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-between px-6 items-center h-[10vh]">
        <ul className="flex list-none gap-7 p-5">
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? "selected-link" : ""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/createEvent" className={({isActive}) => isActive ? "selected-link" : ""}>Create Event</NavLink>
            </li>
        </ul>
        <Link to="/login" className="rounded-md px-3 pb-[3px] bg-[#ff2424] text-[#ffead7]">Login</Link>
    </nav>
  )
}

export default Navbar
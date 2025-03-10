import { Outlet,useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function MainTemplate() {
  return (
    <div>
        <Navbar />
        <main className="px-11 overflow-auto h-[90vh] pt-6">
            <Outlet />
        </main>
    </div>
  )
}

export default MainTemplate
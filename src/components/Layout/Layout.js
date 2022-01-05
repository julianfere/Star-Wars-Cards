import Navbar from "../Navbar"
import { Outlet } from "react-router"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Outlet />
      </div>
    </>
  )
}
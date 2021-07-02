import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/codepath.svg"
import apiClient from "../../services/apiClient"

export default function Navbar({ user, setUser, handleLogout }) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="codepath logo" />
          </Link>
        </div>

        <div className="socials">
        </div>

        <ul className="links">
          {user?.email ? (
            <>
                      <li>
            <Link to="/">Activity</Link>
          </li>
          <li>
            <Link to="/exercise">Exercise</Link>      
          </li>
          <li>
            <Link to="/sleep">Sleep</Link>
          </li>
          <li>
            <Link to="/nutrition">Nutrition</Link>
          </li>
            <li>
              <span>{user.email}</span>
            </li>
            <li className="logout">
              <span onClick={handleLogout}>Logout</span>
            </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

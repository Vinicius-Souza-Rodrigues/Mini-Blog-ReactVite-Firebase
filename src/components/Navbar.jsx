import style from "./Navbar.module.css";

// hooks
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication"; 
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={style.navbar}>
            <NavLink className={style.brand} to='/'>
                <p>mini <span>Blog</span></p>
            </NavLink>

            <ul className={style.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>Home</NavLink>
                </li>

                {!user && (
                  <>
                    <li>
                      <NavLink to="/login" className={({ isActive }) => (isActive ? style.active : "")}>Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className={({ isActive }) => (isActive ? style.active : "")}>Register</NavLink>
                    </li>
                  </>
                )}

                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? style.active : "")}>Sobre</NavLink>
                </li> 

                {user && (
                  <>
                    <li>
                      <NavLink to="/post/create" className={({ isActive }) => (isActive ? style.active : "")}>Post</NavLink>
                    </li>

                    <li>
                      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? style.active : "")}>Dashboard</NavLink>
                    </li>
                    
                    <li>
                      <button onClick={logout} className={style.logout_btn}>Sair</button>
                    </li>
                  </>
                )}
            </ul>

        </nav>
    );
};

export default Navbar;

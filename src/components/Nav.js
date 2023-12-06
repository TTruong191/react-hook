import '../components/Nav.scss'
import { Link, NavLink } from 'react-router-dom';
function Nav() {

    return (
        <div className="topnav">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/timer">Timer Apps</NavLink>
            <NavLink to="/todo">Todo Apps</NavLink>
            <NavLink to="/blog">Blog Apps</NavLink>
            <NavLink to="/secrect">Secrect</NavLink>
        </div>
    );
}

export default Nav;
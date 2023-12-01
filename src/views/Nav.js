import '../views/Nav.scss'

function Nav() {

    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/timer">Timer Apps</a>
            <a href="/todo">Todo Apps</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Nav;
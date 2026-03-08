import { Link, NavLink } from 'react-router-dom';
import Logo from '/images/Logo.svg'

const Header = () => {
    return (
        <header className="header">

                <Link to="/" className='logo-link'>
            <div className="header-logo">
                <img className='site-logo' src={Logo} alt="Logo" />
            </div>
                </Link>

            <nav className="header-nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Matches
                </NavLink>

                <NavLink
                    to="/teams"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Teams
                </NavLink>
            </nav>

        </header>
    );
};

export default Header;
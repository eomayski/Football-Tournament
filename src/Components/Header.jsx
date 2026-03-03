import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">

            {/* Лого / Заглавие */}
            <div className="header-logo">
                <h1 className="header-title">Football Tournament</h1>
            </div>

            {/* Навигация с NavLink */}
            <nav className="header-nav">
                <NavLink
                    to="/matches"
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
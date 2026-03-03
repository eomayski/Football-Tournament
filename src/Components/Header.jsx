import React from 'react';
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

      {/* Потребителски профил */}
      <div className="header-profile">
        <button aria-label="Потребителски профил">
          <svg className="profile-icon" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>

    </header>
  );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = ({ backgroundDark }) => {
    return (
        <header className={backgroundDark ? 'header--dark-background' : ''}>
            <div className="netflix-logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix"
                />
            </div>
            <div className="user-logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="User-logo"
                />
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css';


const Header = ({props,isLoggedIn, setIsLoggedIn, userName}) => {
    const handleLogOut = () => {

        setIsLoggedIn(false);
        //console.log('111');
    };

    return (
        
        <header className="Header">
            {
                isLoggedIn ?
                <nav className="nav">
                    <img className="logo"  alt="logo" />
                    <h3 className="title">title</h3>
                    <Link className="navl"  exact to="/login" onClick={handleLogOut}>
                        Logout
                    </Link>
                </nav>
                : <nav className="nav">
                    <img className="logo"  alt="logo" />
                    <h3 className="title">Title</h3>
                    <div className="navChild">
                        <h3 className="navl" id="1">Trade</h3>
                        <h3 className="navl" id="1">Buy Crypto</h3>
                    </div>
                    

                    <Link className="navl" exact to="/login">
                        Login
                    </Link>
                    <Link className="navl" exact to="/registration">
                        Register
                    </Link>
                    
                    </nav>
                    
            }
        </header> 
    );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Header = props => {
    return (
        <header>
            <nav className="header-title">
                {/* Its logo */}
                <div className="header-logo">
                    <Link to="/">
                    <i className="iconfont">&#xe64b;</i>
                    </Link>
                </div>
                {/* Its login button! */}
                <div className="header-login">
                    <button>Login</button>
                </div>
            </nav>
        </header>
    );
};


export default Header;
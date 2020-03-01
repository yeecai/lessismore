import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./index.less";
import { loginModalShow } from "../../actions/index";

const Header = props => {
    const { loginModalShow } = props;
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
                    <button onClick={loginModalShow}>log in</button>
                </div>
            </nav>
        </header>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        loginModalShow
      },
      dispatch
    );
  };

export default connect(
    null,
  mapDispatchToProps
)(Header);

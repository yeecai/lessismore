import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./index.less";
import { loginModalShow, signoutUser } from "../../actions/index";



const Header = props => {


    const { loginModalShow, authenticated, signoutUser } = props;

    let button;
 
    if (authenticated) {
      button =  <button onClick={signoutUser}>log out</button>
    } else {
      button =  <button onClick={loginModalShow}>log in</button>
    }
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
               
                {button}

                </div>
            </nav>
        </header>
    );
};


const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        loginModalShow,
        signoutUser
      },
      dispatch
    );
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

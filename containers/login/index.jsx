import React,  { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalContainer from "./ModalContainers";
import { signinUser, loginModalhide } from "../../actions/index";
import "./index.less";

import {
    AUTH_USER,
} from "../../actions/types";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    handleChange = event => {
        const target = event.target;
        if ( target.type === 'text') {
            this.setState({ userName: target.value});
        } else if (target.type === 'password') {
            this.setState({ password: target.value });
        }
    };

    toLogin = () => {
        const { userName, password } = this.state;
        const { signinUser, loginModalhide } = this.props;
        // if (userName === "" || userName !== "admin") {
        //     alert("wrong account or password bro");
        //     return;
        // } else if ( password === "" || password !== "123") {
        //     alert("sth wrong, try again")
        //     return;
        // }

        // dispatch({ type: AUTH_USER });
        localStorage.setItem("token",123456);
        loginModalhide();


        signinUser({ userName, password })
            .then( res => {
                if (res.success) {
                    loginModalhide();
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const {  isLoginModalShow , loginModalhide } = this.props;
        const { visible } = isLoginModalShow;
        const divStyle = {
            zIndex: visible ? "1" : "-1"
        };

        return (
            <ModalContainer>   
                <div
                className={`${visible ? "modal fade show" : "modal fade"}`}
                style={divStyle}
                >
                    <div className="modal-backdrop">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <i onClick={loginModalhide} className="iconfont">&#xe85c;</i>
                                    <h4 className="modal-title">Login</h4>
                                </div>

                                <div className="modal-body">
                                    <input 
                                        type="text"
                                        placeholder="Account" 
                                        className=""
                                        onChange={this.handleChange}/>
                                    <input 
                                        type="password"
                                        placeholder="Password" 
                                        className=""
                                        onChange={this.handleChange}/>


                                    <button onClick={this.toLogin}>
                                         Log in
                                     </button>

                                     <a>Forgot password?</a>
                                     <p className="agreement">I agree</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ModalContainer> 
        );
    }


};


const mapStateToProps = state => ({
    isLoginModalShow: state.isLoginModalShow
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            signinUser,
            loginModalhide,
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

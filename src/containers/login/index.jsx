import React,  { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModalContainer from "./ModalContainers";
import { signUser, loginModalhide } from "../../actions/index";
import "./index.less";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    handleChange = event => {

    };

    toLogin = () => {

    };

    render() {
        const { isLoginModalShow, loginModalhide } = this.props;
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
                                    {/* <i onClick={loginModalhide} className="iconfont">&#xe85c;</i> */}
                                    <h4 className="modal-title">登录</h4>
                                </div>

                                <div className="modal-body">
                                    
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
            signUser,
            loginModalhide
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

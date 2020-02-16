import React from "react";
import "./index.less";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
            {/* Menu */}
                <div className="header-nav">
                    <button className="active">Recommend</button>
                    <button>Life</button>
                    <button>Tech</button>
                </div>
            </div>
        );
    }
}

export default Home;
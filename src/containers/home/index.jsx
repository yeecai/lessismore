import React from "react";
import "./index.less";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="list-home">
                {/* Menu */}
                <div className="header-nav">
                        <button className="active">Recommend</button>
                        <button>Life</button>
                        <button>Tech</button>
                </div>

                // let's make a list here
                <div className="list-wrap">
                    <a className="article-item">
                        <h4>THis is the list  <title>title</title></h4>
                        <div className="content">
                            <img/>
                            <p>this is list content</p>
                        </div>
                        <p className="article-item">Someone's work 3 likes</p>
                    </a>

                    <a className="article-item">
                        <h4>THis is the list  <title>title</title></h4>
                        <div className="content">
                            <img/>
                            <p>this is list content</p>
                        </div>
                        <p className="article-item">Someone's work 3 likes</p>
                    </a>

                    <a className="article-item">
                        <h4>THis is the list  <title>title</title></h4>
                        <div className="content">
                            <img/>
                            <p>this is list content</p>
                        </div>
                        <p className="article-item">Someone's work 3 likes</p>
                    </a>
                </div>
            </div>

        );
    }
}

export default Home;

import React from "react";
import axios from "axios";
import "./index.less";
import { removeLoading, addLoading } from "../../components/Loading/index";
import { loginModalShow } from "../../actions/index";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{title:"a"}],
            // data: [],
            hasMore: false, // 是否有下一页
            active: 0
          };

    }

    componentDidMount() {
        // page 为当前页码，type 为列表类型："推荐", "生活", "科技"
        this.fetchList({ page: 1, type: 0 });
        setTimeout(removeLoading, 100);        
      }

    fetchList (params, isRefresh) {
        addLoading();
        axios({
          url: "https://www.easy-mock.com/mock/590766877a878d73716e4067/mock/list",
          params: params
        }).then(res => {
          const { result, success } = res.data;
          if (success) {
            // removeLoading();
            let data;
            if (isRefresh) {
              data = result.data;
            } else {
              data = this.state.data.concat(result.data);
            }
            this.setState({
              data,
              page: result.page,
              hasMore: result.hasMore
            });
          }
        });
    }

    toDetails = () => {
      loginModalShow();
    };

    // why arrow function like "toDetails = () => {}" not working here

    render() {
      const { data, hasMore, active } = this.state;
        return (
            <div className="list-home">
                {/* Menu */}
                <div className="header-nav">
                        <button className="active">Recommend</button>
                        <button>Life</button>
                        <button>Tech</button>
                </div>
                {/* The list here */}
                <div className="list-wrap">
                    {
                        data.map((item, index) => {
                            return (
                                <a 
                                    className="article-item"
                                    key={index}
                                    onClick={() => this.toDetails(item.id)}
                                >
                                     <h4>{item.title}</h4>
                                     <div className="content">
                                         <img/>
                                        <p>{item.content}</p>
                                    </div>
                                    <p className="item-footer">Author {item.work} got {item.num} likes!</p>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;

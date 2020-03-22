import React from "react";
import axios from "axios";
import "./index.less";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeLoading, addLoading } from "../../components/Loading/index";
import { loginModalShow } from "../../actions/index";

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{title:"aaaaaa", content:" "}, {title: "data 2", id: 2}],
            // data: [],
            hasMore: false, // 是否有下一页
            active: 0
          };

    }

    componentDidMount() {
      console.log("-----mount");
      
        // page 为当前页码，type 为列表类型："推荐", "生活", "科技"
        // this.fetchList({ page: 1, type: 0 });
        setTimeout(removeLoading, 100);        
      }

    fetchList (params, isRefresh) {
        addLoading();
        axios({
          url: "http://120.78.214.127:8080",
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

    toDetails = id => {
      const { authenticated, loginModalShow} = this.props;
      console.log("--------------toDetails" + authenticated);
      if ( authenticated ) {
        const { history } = this.props;
        history.push({
            pathname: `/details/${id}`
        });
      } else {
        loginModalShow();
      }
    };

    // why arrow function like "toDetails = () => {}" not working here

    render() {
      const { data, hasMore, active } = this.state;
      const {loginModalShow} = this.props;
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
const mapStateToProps = state => ({
      authenticated: state.auth.authenticated
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginModalShow
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// export default Home;

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {hashHistory} from "react-router-dom";
import rootReducer from "../reducers";
import {routerMiddleware} from "react-router-redux";

const router = routerMiddleware(hashHistory);
const enhancer = compose(
    applyMiddleware(thunk, router),
    // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = require("../reducers").default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";
// export default function configureStore(initialState) {
//     return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }
import { combineReducers } from "redux";

 function Test(state = {test: "test"}, action) {
    switch (action.type) {
        case "Test_test_123":
            return Object.assign({}, state, action.result);
        default:
            return state;
    }
} 

export default combineReducers({
    Test
    //aReducer,
    //bReducer
});


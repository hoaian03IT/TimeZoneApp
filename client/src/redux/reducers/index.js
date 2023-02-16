import { combineReducers } from "redux";
import account from "./account";
import product from "./product";

export default combineReducers({
    account,
    product,
});

import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import ProductReducer from "./Products/ProductReducer";

const RootRedcucer = combineReducers({
    products:ProductReducer,
    cart:CartReducer,
})
export default RootRedcucer
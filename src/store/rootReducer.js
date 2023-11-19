import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer= combineReducers({
    cart:cartReducer
    //user:userReducer
    //xx:xxReducer// all reducer can combine in here.
})
export default rootReducer;
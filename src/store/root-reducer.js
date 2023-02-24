import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart-reducer";
import { ProductReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user : userReducer,
    products : ProductReducer,
    cart : cartReducer
})





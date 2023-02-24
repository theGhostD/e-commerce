import { createAction } from "../../Asset/reducer/reducer.utils";
import { userActionType } from "../user/user.actionTypes";
import { createSelector } from "reselect";

export const getProducts = (product) =>  createAction(userActionType.getProducts, product);

const theproductReducer =(state=> state.products)

export const theIsloading = createSelector(
    [theproductReducer],
    (products) => products.isloading
)

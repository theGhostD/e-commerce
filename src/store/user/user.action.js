import { createAction } from "../../Asset/reducer/reducer.utils";
import { userActionType } from "./user.actionTypes";

export const SetcurrentUser = (user) =>
  createAction(userActionType.setUser, user);

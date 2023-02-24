// import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };
const middleWares = [process.env.NODE_ENV !== "production" && logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware : middleWares
})
// const persistedReducer = persistReducer(persistConfig, rootReducer);



// const composeEnhancers =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancer = composeEnhancers(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancer);

// export const persistor = persistStore(store);

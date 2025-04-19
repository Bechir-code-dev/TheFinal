import reducer from "./reducer";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

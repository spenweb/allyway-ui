import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import createRootReducer from "./ducks/root-reducer";
import _ from "lodash";
import { applyMiddleware, compose, createStore } from "redux";

// TODO: Make better way for determining if the current device is a remote device (for redux-devtools testing).
const isRemoteDevice = window.location.hostname === "10.0.2.2";

const getNormalStore = () => {
  return configureStore({
    reducer: createRootReducer(),
  });
};

const store = getNormalStore();
export default store;

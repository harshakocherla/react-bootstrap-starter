import { combineReducers } from "redux";
import { profileDetails } from "./data";

import { connectRouter } from "connected-react-router";
export default history =>
  combineReducers({ profileDetails, router: connectRouter(history) });

import { combineReducers } from "redux";
import bounty from "./web3Reducers";

const reducer = combineReducers({
  bounty: bounty
});

export default reducer;

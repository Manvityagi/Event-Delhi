import { combineReducers } from "redux";
import authReducer from "../../components/Auth/reducers";

export const rootReducer = combineReducers({
  user: authReducer
});

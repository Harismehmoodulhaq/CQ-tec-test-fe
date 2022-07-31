import { combineReducers } from "redux";
import { booksReducer, commonReducer, studentsReducer } from "./commonReducer";

export const rootReducer = combineReducers({
  common: commonReducer,
  studentPage: studentsReducer,
  bookPage: booksReducer,
});

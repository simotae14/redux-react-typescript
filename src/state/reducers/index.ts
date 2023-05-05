import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;

export type Rootstate = ReturnType<typeof reducers>;
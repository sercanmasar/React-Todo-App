import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reducer/addTodo.reducer";
import logger from 'redux-logger';

const store = createStore(addTodo, applyMiddleware(logger))

export default store;
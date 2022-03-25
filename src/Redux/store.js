import { createStore } from "redux";
import RootRedcucer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(RootRedcucer,composeWithDevTools());

export default store;
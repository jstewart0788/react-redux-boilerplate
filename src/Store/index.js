import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import globalReducers from "./Global";

export const history = createBrowserHistory();

const rootReducer = combineReducers({ global: globalReducers, router: connectRouter(history) });

export const store = createStore(
  rootReducer, // top parent 
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk
    )
  )
);
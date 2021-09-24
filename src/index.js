import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import myReducer from "./Reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import mysaga from "./Sagas";

// saga
const rootReducer = combineReducers({ myReducer });
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mysaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

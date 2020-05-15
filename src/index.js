import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';
import {onChange,onSubmit} from './Actions/loginFormActions';
import {setStorageData} from './Actions/storageDataAction'
import App from "./App";
let store = createStore(reducer,applyMiddleware(thunk));
store.subscribe(()=>{console.log('.........................',store.getState())})
// store.dispatch(setStorageData({key:'defects'}))
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);

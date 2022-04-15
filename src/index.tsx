import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
//import {AppWrapper} from './App'
//import store from './Componets/useReducersampleApp/ReduxFIles/Reducers/Index'
import {Provider} from 'react-redux'
import storeTs from './Componets/TypeScriptProjects/ReduxUiTS/ReduxStore/ReducerRepo/Index'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeTs}>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want     to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

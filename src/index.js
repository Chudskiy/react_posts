import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducers";
import 'antd/dist/antd.css';
import {AuthProvider} from "./Context/AuthContext";



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools(),
        )
)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AuthProvider>
          <BrowserRouter>
                  <App />
              </BrowserRouter>
          </AuthProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

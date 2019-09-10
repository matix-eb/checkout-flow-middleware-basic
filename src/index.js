import "./styles.css";
import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import flowOrchestrator from "./flow";
import { Step1, Step2, Step3 } from "./Steps";
import reducer from "./reducer";

const history = createBrowserHistory();
const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk, flowOrchestrator(history))
);

store.dispatch({
  type: "navigation:next"
});

render(
  <Provider store={store}>
    <>
      <h1>Flow</h1>
      <Router history={history}>
        <Route path="/step1" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
      </Router>
    </>
  </Provider>,
  document.querySelector("#app")
);

console.log("render!");

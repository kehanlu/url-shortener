import React from "react";
import { Provider } from "react-redux";
import store from "../store";

import { PrivateRoute } from "../common/PrivateRouter";
import Container from "@material-ui/core/Container";

import { Home } from "./layout/Home";
import { Header } from "./layout/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SocialLogin } from "./SocialLogin";
import { UrlRedirect } from "./urls/UrlRedirect";
import { checkRefreshToken } from "../actions/auth";

import { Alert } from "./Alerts";

function App() {
  store.dispatch(checkRefreshToken());

  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={SocialLogin} />
            <Route path="/:short_code" component={UrlRedirect} />
          </Switch>
        </Router>
      </Container>
      <Alert />
    </Provider>
  );
}

export default App;

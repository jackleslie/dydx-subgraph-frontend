import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import Positions from "./Positions";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/jackleslie/dydx"
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/positions/:account" component={Positions} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

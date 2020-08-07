import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import { client } from "./apollo/client";

import "rmwc/dist/styles";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);

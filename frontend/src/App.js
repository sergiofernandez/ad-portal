import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { RMWCProvider } from "@rmwc/provider";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";

import AdList from "./pages/AdList";
import AdDetail from "./pages/AdDetail";

function App() {
  return (
    <RMWCProvider>
      <SimpleTopAppBar title="Portal de anuncios"/>
      <TopAppBarFixedAdjust/>
      <Router>
        <Switch>
          <Route exact path="/">
            <AdList/>
          </Route>
          <Route path="/ads/:id">
            <AdDetail/>
          </Route>
        </Switch>
      </Router>
    </RMWCProvider>
  );
}

export default App;

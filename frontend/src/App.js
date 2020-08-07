import React from "react";

import { RMWCProvider } from "@rmwc/provider";
import { SimpleTopAppBar, TopAppBarFixedAdjust } from "@rmwc/top-app-bar";

import AdList from "./pages/AdList";

function App() {
  return (
    <RMWCProvider>
      <SimpleTopAppBar title="Portal de anuncios"/>
      <TopAppBarFixedAdjust/>
      <AdList/>
    </RMWCProvider>
  );
}

export default App;

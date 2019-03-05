// Import react
import React, { useState } from "react";
import store, { history } from "./state/store";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import NavTabs from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <NavTabs />
      </ConnectedRouter>
    </Provider>
  );
}

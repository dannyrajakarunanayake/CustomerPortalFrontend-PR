import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./util/store";

import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { PayrightThemeProvider, media } from "@payright/web-components";
import { createGlobalStyle } from "styled-components";





const GlobalStyle = createGlobalStyle`
  // Reduce the extra large heading sizes for smaller devices
  ${media.max.large} {
    h1 {
      font-size: 2.2em;
    }
    h2 {
      font-size: 1.93em;
    }
    h3 {
      font-size: 1.65em;
    }
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PayrightThemeProvider>
        <GlobalStyle />
        <App />
      </PayrightThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

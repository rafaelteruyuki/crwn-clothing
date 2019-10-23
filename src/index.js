import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from "./App";

ReactDOM.render(
<<<<<<< HEAD
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root"));
=======
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
>>>>>>> parent of 094d35d... Merge branch 'master' of https://github.com/rafaelteruyuki/crwn-clothing
=======
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"));
>>>>>>> parent of f66d887... first files to implement redux on user

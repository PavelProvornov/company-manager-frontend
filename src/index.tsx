import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import "./assets/styles/index.scss";

const mountNode = document.getElementById("app");

ReactDOM.render(<App name="Paul" />, mountNode);

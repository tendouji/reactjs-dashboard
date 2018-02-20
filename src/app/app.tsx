import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "../layout/header";

let currentData = {
  userName: 'Tendouji'
}

ReactDOM.render(
  <Header name={currentData.userName} />,
  document.getElementById('root')
);

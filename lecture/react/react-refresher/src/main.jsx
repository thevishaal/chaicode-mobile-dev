import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


// without jsx ....write in react
// const h1 = React.createElement("h1", null, "Hello world again");
// const name = React.createElement("span", {}, "Vishal Baghel");

let name = "App";

createRoot(document.getElementById("root")).render(
  <>
    <h1>Welcome to mobile dev - {name}</h1>
    <App />
  </>
)
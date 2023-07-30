import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

## install vite with react and javascript
## config eslint
## tailwind download done 

*** React Router latest version (6.4+) ***
-----------------------------------------------
## we can now data loading with React Router (but React Query is recommneded)
## previously we saw react-router with world wise app where we define router in a old way
## here we will define router in a new way (each route is a obj). bcz now with this 6.4+ version 
   we can load data using React Router.
## "npm i react-router-dom@6" --> install it 
## createBrowserRouter() --> we now create route in this func call check doc.must be created outside component
    then use it in the jsx
## 

*/

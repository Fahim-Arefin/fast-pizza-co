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
e 

*** React Router latest version (6.4+) Data fetching technic ***
--------------------------------------------------------------------------
## Technic is when we hit a route data will be fetched as soon as we hit the route
## need 3 steps doing it
## First we define loader() func inside the page 
## second we pass it to the route as "loader: menuLoader,"
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
## Third we call the hook useLoaderData() to the route page so that when a route 
   is hit it will execute this hook.this hook will give the response of the rest API.
## React Router use "Render as u fetch" technic where page gets loaded and data loading same time
## In useEffect use "Fetch on render" technic where page first gets loaded then useEffect() gets 
   called then data loading is happenning. So it will gets more time to load data also
   get in loading state longer

   *** React Router latest version (6.4+) spinner add  ***
--------------------------------------------------------------------------
##  const navigation = useNavigation(); this hook will give us the loading state
## if a page is idle or in loading state we can use this hook to track then we can use 
    this loading state and add our spinner component

    *** Submit form data using React Router***
-----------------------------------------------------------------------
## we can replace the <form> with <From> which is a React Router feature
## now no need to ware up all the input field with a state 
## React-Router will do it for us 
## now when we submit the form it will pass the data into "action" func and we can grap 
the request in the parameter 
## see CreateOrder component
## steps-1 ---> create the <From> 
## steps-2 ---> create action func
## pass action fucn to the route
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
## steps-3 ---> grab the request to the action fucn and use it
## step-4 ----> now we can access all the data inside action func 
## step-5 --> now we can call the REST API using that data

*** Submit form data using React Router erorr handle***
-----------------------------------------------------------------------
## to handle error we can return it from the action
## then we can reference it using useActionData() hook in the component
## then use it in then component



//Important
#### ALL "LOADER" AND "ACTION" FUNCTION MUST RETURN THE DATA (OR SOMETHING) 
     then this data will be access from components via some hooks
     like useLoaderData(),useActionData()..


*/

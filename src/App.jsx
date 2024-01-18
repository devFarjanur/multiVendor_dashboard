import React from 'react';
import { useState } from "react"
import Router from "./router/routes/Router"
import publicRoutes from "./router/routes/publicRoutes";

function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);


  console.log(allRoutes);

  return (
    <div>
        <Router allRoutes={allRoutes}></Router>
    </div>
  )
}

export default App;

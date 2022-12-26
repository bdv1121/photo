
import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './Homepage/Home';
import Peace from './Pages/Peace';
import Random from './Pages/Random';



function Router() {
  return (
    <div>
        
        <HashRouter>
        <Routes>
            <Route path = "random" element={<Random />}></Route>
            <Route path = "peace" element={<Peace />}></Route>
            <Route path = "/" element = {<Home />}></Route>
        </Routes>
        </HashRouter>
    </div>

  )
}

export default Router;

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Homepage/Home';
import Peace from './Pages/Peace';
import Random from './Pages/Random';



function Router() {
  return (
    <div>
        
        <BrowserRouter>
        <Routes>
            <Route path = "random" element={<Random />}></Route>
            <Route path = "peace" element={<Peace />}></Route>
            <Route path = "/" element = {<Home />}></Route>
        </Routes>
        </BrowserRouter>
    </div>

  )
}

export default Router;
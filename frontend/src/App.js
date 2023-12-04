import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Visa from './components/Visa';
import Flight from './components/Flight';
import Sales from './components/Sales/Sales';
import Accounts from './components/Accounts/Accounts';
import Login from './components/Login';
import EuropeElegance from './components/Packages/EuropeElegance';
// import Navbar from './components/Navbar'
// import Home from "./components/Home"

function App() {
//  const { pathname } = window.location;
//  const HideHeaer = pathname === "/login" ? null : <Navbar />;
 return (
   <BrowserRouter>
     {/* {HideHeaer} */}
     <Routes>
      
       <Route exact path="/" element={<Login />} />
       <Route exact path="/sales" element={<Sales />} />
       <Route exact path="/accounts" element={<Accounts />} />
       <Route exact path="/flight" element={<Flight />} />
       <Route exact path="/visa" element={<Visa />} />
       <Route path="/europeElegance" element={<EuropeElegance />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App

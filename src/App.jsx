import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Reservations from "./pages/Reservations";
import Footer from "./components/Footer";
import ReserveTable from "./pages/ReserveTable"; 


function App() {
  return (
    <>
    <div className="">
    <Router >
       <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order-online" element={<OrderOnline/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
        <Route path="/reserve-table" element={<ReserveTable/>}/>
      </Routes>
      <Footer/>
      

    </Router>

    </div>
  
    </>
   
    
    
  );
}

export default App;

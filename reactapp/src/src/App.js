// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Calculator from './Calculator';
import About from './About';
import Contact from './Contact';
import Help from './Help';
import { useState,useEffect } from 'react';
// // import ClipLoader from "react-spinners/ClipLoader";
import { RingLoader} from 'react-spinners';
import Profile from "./Profile";
import Navbar from "./Navbar";


function App() {
  const[loading,setloading]=useState(true)
useEffect(()=>{
  setTimeout(()=>
  {
    setloading(false)
  },400);
})
  return (
    <div style={{alignContent:'center',alignItems:'center'}}>
    <BrowserRouter>
       {loading?<RingLoader
        color="blue"
        loading={true}
        size={90}
      />:
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/calci" element={<Calculator/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/help" element={<Help/>}/>
       </Routes>
}
    </BrowserRouter>
    </div>
  );
}

export default App;

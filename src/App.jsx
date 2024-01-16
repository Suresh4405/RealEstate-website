
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import mail from "./assets/Mail.png"
import call from "./assets/call.png"
import google from "./assets/google.png"
import pinterest from "./assets/pinterest.png"
import twitter from "./assets/Twitter1.png"
import facebook from "./assets/facebook.png"

import {Route,Routes,Link} from "react-router-dom"
import RealEstate from "./Navbar/RealEstate"



import './App.css'
import Contact from './Contact/Contact';
import Blog from './Block/Blog';
import Agent from './Agents/Agent';
import Aboutcomp from './About/Aboutcomp';

function App() {
  
  return (
    <div>
    
    <div className="doc-1">
            <img src={mail} className="mail-img"></img>
            <p className="mail">m.suresh4405@gmail.com</p>
            <br></br>
            <img src={call} className="phone-img"></img>
            <p className="phone">6379341607</p>
             <img src={google} className="brad"></img>
            <img src={pinterest} className="pinterest"></img>
            <img src={twitter} className="twitter"></img>
            <img src={facebook} className="facebook"></img>

        </div>
        <div className="doc-2">
            <br></br>
            <p className="vip">VIP</p>
            <p className="Real-Estate">Real Estate</p>
            <p className="home"><Link to="/home">HOME </Link></p>
            <p className="about"><Link to="/About">ABOUT</Link></p>
            <p className="agent"><Link to="/Agent">AGENTS</Link></p>
            <p className="properties"><Link to="/Properties">PROPERTIES</Link></p>
            <p className="blog"><Link to="/Blog">BLOG</Link></p>
            <p className="contact"><Link to="/contact">CONTACT</Link></p>
        </div>
 
      <Routes>
      <Route index element={<RealEstate />} />

        <Route path="/home" element={<RealEstate/>}/>
        <Route path="/About" element={<Aboutcomp/>}/>
        <Route path="/Properties" element={<Aboutcomp/>}/>
        <Route path="/Agent" element={<Agent/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
   
    
    </div>
    
  

  )
}

export default App
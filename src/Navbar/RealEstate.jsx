import React, { useState } from "react";
import "./RealEstate.css"
import mail from "../assets/Mail.png"
import call from "../assets/call.png"
import google from "../assets/google.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/Twitter1.png"
import facebook from "../assets/facebook.png"
import Caroselcomp from "./Caroselcomp";
import tmt from "../assets/tmt.jpg"
import cement from "../assets/cement.png"
import brick from "../assets/brick.png"
import sand from "../assets/sandd.jpg"
import appartment from "../assets/appartment1.jpg"
import appert1 from "../assets/appert1.jpg"
import appart2 from "../assets/appart2.jpg"
import appart3 from "../assets/appart3.jpeg"
import Aboutcomp from "../About/Aboutcomp";
import Agent from "../Agents/Agent"
import Blog from "../Block/Blog";
import Contact from "../Contact/Contact";
function RealEstate(){

    const [data,setData]=useState([
        {
            img:appert1,
            name:"Scandinavian Style Apartment",
            description:"94-98 Ingraham St, Brooklyn, NY 11237,USA"
        },
        {
            img:appart2,
            name:"Lovelace Greenfield",
            description:"120 N St SW Thomaston, Georgia(G,A),3028"
        }, {
            img:appart3,
            name:"Building Complex Apartment",
            description:"120 A Chennai Metro, Tamil nadu India"
        },
    ])
    
    return(
        <div>
        <div className="Homee-div">
        <Caroselcomp />
        </div>
        <div className="container">
        <div className="box"><img src={tmt} className="dealers"></img></div>
        <div className="box"><img src={cement} className="dealers"></img></div>
        <div className="box"><img src={brick} className="dealers"></img></div>
        <div className="box"><img src={sand} className="dealers"></img></div>
        
    </div>
    <div className="doc-3">
        <p className="vip-2">VIP</p>            
         <p className="Real-Estatee">Real Estate</p>
        </div>
        <div>
        <h1 className="proper">Properties</h1>
        <p className="sale">HOME FOR SALE</p>
        </div>
        <div className="doc-4">
            <img src={appartment} className="app-img"></img>
        </div>
        <div className="container-2">
           {data.map((dd,i)=>(
            <div key={i}>
           <div className="box-2"> <img src={dd.img} className="appart-size"></img> 
           <h4 className="size-1">{dd.name}</h4>
          <p className="size-2"> {dd.description}</p>
          </div>
                </div>
           ))}
        </div>

        <div>

            <Aboutcomp/>
        </div>
    
        <div className="move">
        <Agent/>
        </div>
        <div>
            <Blog/>
        </div>
        
        <div>
            <Contact/>
        </div>
        </div>
       
    )
}
export default RealEstate
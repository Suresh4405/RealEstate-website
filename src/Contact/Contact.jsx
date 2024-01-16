import React from 'react';
import "./contact.css"
import google from "../assets/google.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/Twitter1.png"
import facebook from "../assets/facebook.png"
const Contact = () => {
    return (
        <div className="End-rest">
        <div className="Onepiece">
            <h1 className='words'>Everything is about to change</h1>
            <input placeholder='Email Address' className='input'></input>
            <button className='button'>Subscribe</button>
            <br>
            </br>
            </div>
            <div className='last'>
                <p >ABOUT</p>
                <p>INFORMATON</p>
                <p>RECENT NEWS</p>
                <p>GET IN TOUCH</p>
           
        </div>
         <div className='no-2'>
                <p className='p1'>ABOUT STDIO</p>
                <p className='p2'>CUSTOMER SERVICE</p>
                <p className='p3'>Proin eros nosl, omare sed <br></br>
                    vehicals amet,feugiat  </p>
                <ul className='p4'><li>San Fransisco, Co<br></br> 125,california,STP 2 Building</li></ul>
           
        </div>
        <div className='no-3'>
                <p className='c1'>JOBS </p>
                <p className='c2'> LEGAL INFORMATION</p>
                <p className='c3'><br></br> </p>
                <ul className='c4'><li>\www.vipbuilers.com</li></ul>
           
        </div>
        <div className='no-4'>
                <p className='d1'>TEAM </p>
                <p className='d2'>  SUPPORT</p>
                <p className='d3'> Morbi placerat accumsan<br></br>nunc,luctus lacini </p>
                <ul className='d4'><li>\www.vipbuilers.com</li></ul>
           
        </div>
        <div className='no-5'>
                <p className='e1'>SECURITY </p>
                <p className='e2'>  FAQ</p>
                <p className='e3'> <br></br> </p>
                <ul className='e4'><li>+91 6379341607 </li></ul>
           
        </div> 
        <div className='end'>
            <img src={google} className='google'></img>
            <img src={pinterest} className='pinterest'></img>
            <img src={facebook} className='twitter'></img>
            <img src={twitter} className='facebook'></img>
            <p className='eed'>PRIVACY POLICY   |   TERMS & CONDITION</p>
        </div>
        </div>
    );
}

export default Contact;
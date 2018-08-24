import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (


  <div>

       <div className="underline">
         <div className="w3-top">
             <div className="w3-bar w3-white w3-wide w3-padding w3-card">
              <a><img src="../images/nowhitebg3.png" alt="Los" className="w3-bar-item"></img></a>
                 <div>
                    <NavLink className="w3-bar-item w3-button w3-hover-black" to="/" exact >Home</NavLink>
                    <NavLink className="w3-bar-item w3-button w3-hover-blue" to="/Wordmysteries" exact >Wordmysteries</NavLink>
                    <NavLink className="w3-bar-item w3-button w3-hover-red" to="/Comics" exact >Comics</NavLink>
                  <div className="w3-right w3-hide-small">
                  <NavLink className="w3-bar-item w3-button w3-hover-green" to="/Register" exact >Register</NavLink>
                  <NavLink className="w3-bar-item w3-button w3-hover-green" to="/Login" exact >Login</NavLink>
                  </div>
                     <NavLink to="/Error" hidden >Error</NavLink>
                 </div>
             </div>
          </div>
       </div>

  </div>

  );
};

export default Navigation;

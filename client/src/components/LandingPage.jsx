import React from "react";
import { NavLink } from "react-router-dom";

export default function LandingPage () {
    
    return (

        <div className = "NavLink" >
            
           
            <NavLink to="/home" >

                <img  
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" 
                alt = "to home" />

            </NavLink>
            
            

        </div>
    )
}
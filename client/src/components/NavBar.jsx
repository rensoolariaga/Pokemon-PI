import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar () {

  return (

      <div className = "navBar" >

          <NavLink 
            to = "/home" 
            className = "link" >

                HOME

          </NavLink>
        
          <NavLink 
            to = "/search" 
            className = "link" >

                SEARCH

          </NavLink> 

          <NavLink 
            to = "/addpokemon" 
            className = "link" >

                ADD POKEMON

          </NavLink>

      </div>

  );
  
};

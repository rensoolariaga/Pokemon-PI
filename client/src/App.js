import './App.css';
import React from "react";

import { Route } from "react-router";

import LandingPage from './components/LandingPage.jsx';
import NavBar from './components/NavBar.jsx';
import Pokemons from './components/Pokemons.jsx';
import AddPokemon from './components/AddPokemon.jsx';
import Search from './components/Search.jsx';
import IdPokemon from './components/IdPokemon.jsx';



export default function App () {

  return (

    <div className = "App" >

      <Route
        exact path = '/'  
        component = {LandingPage} />
        
      <Route 
        path = '/home'
        component = {NavBar} /> 

      <Route 
        exact path = '/home'    
        component = {Pokemons} />

        <Route 
        path = '/search'
        component = {NavBar} />

        <Route 
        path = '/search'
        component = {Search} />

        <Route 
        path = '/home/:id'
        render = {({ match }) => <IdPokemon props = {match.params.id} />} /> 

      <Route 
        path = '/addpokemon'
        component = {NavBar} />

      <Route 
        path = '/addpokemon'
        component = {AddPokemon} />

    </div>

  );

};

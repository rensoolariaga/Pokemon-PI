import React from "react";

import Pokemon from './Pokemon.jsx';

export default function Rendering ({ pagePokemons }) { 

    return (

        <ul className = 'rendering' >

            {

                pagePokemons.map ((pokemon) => (
                    
                                <li key = {pokemon.id} >

                                    <Pokemon 
                    
                                        name = {pokemon.name} 
                                        image = {pokemon.image}
                                        type = {pokemon.type}
                                        id = {pokemon.id}
                                        key = {pokemon.id} />
                                        
                                </li>
                    )
                
                )
            }

        </ul>
    )

};
import React from "react";

import Details from './Details.jsx';

export default function PokemonFound ({ matchPokemon }) { 

    console.log ('entre al pokemonFound: ' , matchPokemon);

    if (matchPokemon) {

        return (
            
            <ul>

                {
                    
                    matchPokemon.length > 0 &&
                    matchPokemon.map ((pokemon) => (
                        
                                    <li 
                                    
                                    key = {pokemon.id} >

                                        <Details 
                                            name = {pokemon.name}
                                            id = {pokemon.id}
                                            strength = {pokemon.strength}
                                            life = {pokemon.life}
                                            defense = {pokemon.defense}
                                            speed = {pokemon.speed}
                                            height = {pokemon.height}
                                            weight = {pokemon.weight} 
                                            image = {pokemon.image}
                                            type = {pokemon.type}
                                            key = {pokemon.id} />
                                            
                                    </li>
                        )
                    
                    ) 
                }

            </ul>
        )
    }
    else {

         return null;
         
    }

};

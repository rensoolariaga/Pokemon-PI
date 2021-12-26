import React, 
{ 
 useEffect 
  
} from "react";

import { 
        useDispatch, 
        useSelector
} from "react-redux"; 

import {

 pokemonById,
 clearIdPokemon

} from '../Redux/actions/actions.js';

import Details from './Details.jsx';

export default function PokemonId ({ props }) {

    const dispatch = useDispatch (); 

    const { idPokemon } = useSelector (state => state); 
    
    useEffect (() => {
        
        dispatch (pokemonById (props)); 

        return () => { 

            dispatch (clearIdPokemon ());

          };

    }, [dispatch]);

    return (

        <div>

            {
                                            
                    <Details 
                        name = {idPokemon.name}
                        id = {idPokemon.id}
                        strength = {idPokemon.strength}
                        life = {idPokemon.life}
                        defense = {idPokemon.defense}
                        speed = {idPokemon.speed}
                        height = {idPokemon.height}
                        weight = {idPokemon.weight} 
                        image = {idPokemon.image}
                        type = {idPokemon.type}
                        key = {idPokemon.id} />                
                
            }
            
        </div>
    )

};


import {
    ALL_TYPES,
    ALL_POKEMONS,
    CLEAN_POKEMONS,
    POKEMON_BY_NAME,
    CLEAR_POKEMON,
    ORDER_POKEMONS,
    FILTERED_POKEMONS,
    POKEMON_BY_ID,
    CLEAR_POKEMON_BY_ID
}  from '../actions/actionTypes.js';

const inicialState = {

    pokemons: [],
    pokemon: [],
    pokemonsTypes: [],
    idPokemon: []           
}

export default function reducer (state = inicialState, { type, payload }) {  
    switch (type) { 
        case ALL_POKEMONS:

            return { 

                ...state, 
                pokemons: payload 
            };

        case CLEAN_POKEMONS:

            return {

                ...state,   
                pokemons: payload 

            }

        case POKEMON_BY_NAME:

            return {

                ...state, 
                pokemon: payload 

            };
        
        case CLEAR_POKEMON:

            return {
                
                ...state, 
                pokemon: payload 

            }

        case ALL_TYPES:

            return {

                ...state,   
                pokemonsTypes: payload 

            };
        
        case ORDER_POKEMONS:

            return {

                ...state,  
                pokemons: payload   
            };

        case FILTERED_POKEMONS:

            return {

                ...state,   
                pokemons: payload  

            };

        case POKEMON_BY_ID:

            return {

                ...state,   
                idPokemon: payload  
            };

        case CLEAR_POKEMON_BY_ID:

            return {

                ...state,   
                payload: payload   

            };

        default: {

            return state;

        };

    };

};

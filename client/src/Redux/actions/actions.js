import axios from 'axios'

import {
    ALL_TYPES,
    ALL_POKEMONS,
    CLEAN_POKEMONS,
    POKEMON_BY_NAME,
    CLEAR_POKEMON,
    ADD_POKEMON,
    ORDER_POKEMONS,
    FILTERED_POKEMONS,
    POKEMON_BY_ID,
    CLEAR_POKEMON_BY_ID
}  from './actionTypes';

import { 
  GET_POKEMONS, 
  GET_POKEMONS_TYPE 
} from '../../constants'

export function allPokemons () {
  
    return function (dispatch) {

      return axios.get(GET_POKEMONS) 
        .then ((pokemons) =>

          dispatch ({ 
                      type: ALL_POKEMONS, 
                     payload: pokemons.data 
                    }))
        .catch ((error) => console.log (error));
    };
}; 

export function allTypes () {

  return (dispatch) => {

    return axios.get (GET_POKEMONS_TYPE) 
    .then ((types) => 

       dispatch ({
                      type: ALL_TYPES,
                      payload: types.data

                }))
      .catch ((error) => console.log (error));
  };
};

// const typesAll = () => {

//   return async (dispatch) => {

//     try {
    
//      const result = await axios.get (GET_POKEMONS_TYPE);

//       dispatch ({

//                 type: ALL_TYPES,
//                 payload: result.data 

//                 })

//     }
//     catch (error) {

//       console.log(error);
      
//     }



//   }

// }

export function pokemonByName (name) {
  
  return (dispatch) => {

    return axios.get (`${GET_POKEMONS}?name=${name}`) 
      .then ((pokemon) =>

        dispatch ({ 
                    type: POKEMON_BY_NAME, 
                    payload: pokemon.data 

                  }))
      .catch ((error) => console.log (error));
  };
};

export function addPokemon (pokemon) {

  return (dispatch) => { 
    return axios.post (`${GET_POKEMONS}/addpokemon`, pokemon)
    .then ((response) => 

      dispatch ({

                type: ADD_POKEMON

              }))
    .catch ((error) => console.log (error)); 
  };
    
};

export function clearPokemon () {

  return {

          type: CLEAR_POKEMON, // aca le paso la misma actionType que el pokemonByName para que el reducer limpe el estado
          payload: []  // le paso un array vacio asi cuando se ejecuta se limpia 
  };
};

export function orderPokemons (pokemons, order, typeOrder) { 
  if (order === 'alphabetically' && typeOrder === 'ascending') {

    pokemons.sort ((pokemonA, pokemonB) => { 
      if (pokemonA.name > pokemonB.name) {

        return 1;

      } 
      if (pokemonA.name < pokemonB.name) { 

        return -1;

      }

      return 0;

    });


  } 
  else if (order === 'alphabetically' && typeOrder === 'descending') {

    pokemons.sort ((pokemonA, pokemonB) => { 
      if (pokemonA.name < pokemonB.name) {

        return 1;
      } 
      if (pokemonA.name > pokemonB.name) { 

        return -1;

      }

      return 0;

    });

  } 
  else if (order === 'strength' && typeOrder === 'ascending') {

    pokemons.sort((pokemonA, pokemonB) => {

      return pokemonA.strength - pokemonB.strength;

    });

  } 
  else if (order === 'strength' && typeOrder === 'descending') {

    pokemons.sort((pokemonA, pokemonB) => { 

      return pokemonB.strength - pokemonA.strength; 
      
    });

  }

  return {

          type: ORDER_POKEMONS,
          payload: pokemons

  };

};

export function filterPokemons (pokemons, filter) {

  var pokemonsFiltered = []; 

  if (filter === 'api') { 

    pokemonsFiltered = pokemons.filter ((pokemon) => typeof pokemon.id === 'number');

  } 
  else if (filter === 'database') {

    pokemonsFiltered = pokemons.filter ((pokemon) => typeof pokemon.id !== 'number');

  }
  else {

    pokemonsFiltered =  pokemons.filter ((pokemon) => pokemon.type == filter); 

  }

  return {

          type: FILTERED_POKEMONS,
          payload: pokemonsFiltered

  }

};

export function cleanPokemons () {

  return {

          type: CLEAN_POKEMONS,
          payload: []

  };

};

export function pokemonById (id) {

  return (dispatch) => { 

    return axios.get (`${GET_POKEMONS}/pokemonById/${id}`)
    .then ((pokemon) => {

      dispatch ({ 
                  type: POKEMON_BY_ID, 
                  payload: pokemon.data 

                })        }     )
    .catch ((error) => console.log (error));

  }

};

export function clearIdPokemon () {
  
  return {
    
          type: CLEAR_POKEMON_BY_ID,
          payload: []

  }

};

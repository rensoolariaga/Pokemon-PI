import React, 
{ 
 useEffect, 
 useState 
  
} from "react";

import { 
        useDispatch, 
        useSelector 
} from "react-redux"; 

import {

 pokemonByName,
 clearPokemon

} from '../Redux/actions/actions.js';

import PokemonFound from './PokemonFound.jsx';

export default function Search () {

    const dispatch = useDispatch (); 

    const  { pokemon }  = useSelector (state => state); 


    const [input, setInput] = useState (""); 

	const handlerOnChange = (e) => { 

        setInput (e.target.value); 
	};

    const handlerOnSubmit = (e) => { 

		e.preventDefault (); 
        dispatch (clearPokemon ());
        console.log ('entre al handleOnSubmit: ');
        console.log ('soy el pokemon.name: ', pokemon.name);

        if (pokemon) {      

            dispatch (pokemonByName (input))
        }
        else {           

            alert ('the pokemon with that name dont exist')

        }
        setInput (""); 
	};

    useEffect(() => {

        return () => { 
           dispatch (clearPokemon ());
        };
      }, [dispatch]); 


    return (

        <div>

                <form  onSubmit =  {handlerOnSubmit} >

                    <input
                    className = 'inputSearch' 
                    type = "text" 
                    placeholder = 'Search...'
                    value = {input} 
                    onChange = {handlerOnChange} />

                        <button 
                        className = 'btn'
                        type = 'submit' >

                            Search

                        </button>

                </form>


                <div> 

                    {
                        pokemon ?

                        <PokemonFound 
                        matchPokemon = {pokemon} />

                        : null

                    }
                    

                </div>
            
    
       </div>

    );

};

import React, 
{ 
 useEffect, 
 useState 
} from "react";

import { 
 useSelector, 
 useDispatch 
}   from "react-redux";

import {
 allPokemons,
 allTypes,
 orderPokemons,
 filterPokemons,
 cleanPokemons
} from '../Redux/actions/actions';

import Rendering from './Rendering.jsx';

import Paged from './Paged'

export default function Pokemons () { 

    const dispatch = useDispatch ();

    const { pokemons, pokemonsTypes } = useSelector (state => state);
  
    useEffect (() => {

        dispatch (allPokemons ());
        dispatch (allTypes ()); 
        return () => { 

            dispatch (cleanPokemons ());

          };
    }, [dispatch]); 
    

    // ¡¡¡¡¡¡¡ PAGINADO, ORDEN Y FILTROS !!!!!!!!

    const [amountOfPokemons] =  useState (12);

    const [paged, setPaged] = useState (1); 
    const [order, setOrder] = useState("");
    const [typeOrder, setTypeOrder] = useState ("");
    const [filter, setFilter] = useState ("");

    const numberOfPage = (number) => {
        setPaged (number); 
    }

    const lastIndex = paged * amountOfPokemons;

    const firstIndex = lastIndex - amountOfPokemons;


    const pagePokemons = pokemons.slice (firstIndex, lastIndex)



    // ¡¡¡¡¡¡¡¡¡ HANDLERS !!!!!!!!!!!

    const handlerOnChangeOrder = (e) => { 

        setOrder (e.target.value);

    };

    const handlerOnChangeTypeOrder = (e) => { 

        setTypeOrder (e.target.value);

    };

    const handlerSubmitOrder = (e) => { 

        e.preventDefault (); 
        dispatch (orderPokemons (pokemons, order, typeOrder));
        setOrder (""); 
        setTypeOrder (""); 
        setPaged (1); 

    };

    const handlerOnChangeFilter = (e) => {

        setFilter (e.target.value);

    };

    const handlerSubmitFilter = (e) => { 

        e.preventDefault ();
        dispatch (filterPokemons (pokemons, filter));
        setPaged (1);

    };



  
    return (

        <div>

            <form >

                <div className = 'selectOrder' >

                    <p className = 'pInputs' > Select order: </p>
                    <select 
                    name = "order"
                    value = {order} 
                    onChange = {handlerOnChangeOrder} >
                    
                        <option 
                        defaultValue = "undefined" >

                            {null} 

                        </option>

                        <option 
                        value = "alphabetically" >

                            Alphabetically

                        </option> 

                        <option 
                        value = "strength" >

                            Strength

                        </option>

                    </select>

                    <select 
                    name = "typeorder" 
                    value = {typeOrder}
                    onChange = {handlerOnChangeTypeOrder}
                    >

                        <option 
                        defaultValue = "undefined" >

                            {null} 

                        </option>

                        <option 
                        value = "ascending" >

                            Ascending

                        </option>

                        <option 
                        value = "descending" >

                            Descending

                        </option>

                    </select>

                    <button
                    className = 'btn'
                    type = 'submit'
                    onClick = {handlerSubmitOrder} >

                        Order

                    </button>

                </div>

                 


            </form>

            <form  >

                <div className = 'selectFilter' > 

                    <p className = 'pInputs' > Select filter: </p>
                    <select 
                    name = "filter" 
                    value = {filter}
                    onChange = {handlerOnChangeFilter} >

                        <option 
                        defaultValue = "default" >

                            {null} 

                        </option>

                        <option 
                        value = 'api' >

                            Types from api

                        </option>

                        <option 
                        value = 'database' >

                            Types from database

                        </option>

                        {
                            pokemonsTypes && 
                            pokemonsTypes.map ((type) => {

                                return (

                                    <option 
                                    value = {type.name}
                                    key = {type.id} > 

                                        {type.name}

                                    </option>
                                )
                            })
                        }

                    </select>

                    <button
                    className = 'btn'
                    type = 'submit'
                    onClick = {handlerSubmitFilter} >

                        Filter

                    </button>

                </div>
            
            </form>

                <div> 

                    <ul className = 'unordedList' >
                        
                        <Rendering pagePokemons = {pagePokemons} />

                        <Paged

                        amountOfPokemons = {amountOfPokemons}
                        numberOfPage = {numberOfPage}
                        numberOfPokemons = {pokemons.length} />
                    

                </ul>

            </div>

        </div>

    );
};

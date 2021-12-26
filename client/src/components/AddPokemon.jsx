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
 allTypes,
 addPokemon
} from '../Redux/actions/actions';


export default function AddPokemon () {

    const dispatch = useDispatch (); 

    const { pokemonsTypes } = useSelector (state => state); 

    const [form, setForm] = useState ({ 
        name: '',
        life: '',
        strength: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        types: []
    });

    const [error, setError] = useState ('');
  
    useEffect(() => {

        dispatch (allTypes ()); 

    }, [dispatch]);

    const handlerOnSubmit = (e) => { 
        e.preventDefault ();
        
        if (form.name !== '' && form.life !== '' && form.strength !== '' && form.defense !== '' && form.speed !== '' && form.height !== '' && form.weight !== '' && form.image !== '' && form.types.length > 0) { 

            dispatch (addPokemon (form));

            alert ('pokemon created!');

            setForm ({ 
                name: '',
                life: '',
                strength: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                image: '',
                types: []
            });

          } 
          else { 
            alert ('could not be added. check the data entered');
          };


    };

    const handlerOnChangeSelect = (e) => { 

        if(form.types.includes (e.target.value)) {

            let filterTypes = form.types.filter ((type) => type !== e.target.value); 
            setForm ({ 

                ...form,
                types: filterTypes
            });
        }else { 
            setForm ({ 

                ...form,
                types: [ 
                        ...form.types, 
                        e.target.value

                        ]
            });
        };
    };

    function validateString (e) { 
        if (!/[a-zA-Z]/.test (e.target.value)) {

          setError ('you must enter only letters');

        } else {

          setError ("");
    
          setForm ({ 
            ...form, 
            [e.target.name]: e.target.value
          });
        }
      };

    function validateNumber (e) {

        if (!/[0-9]/.test (e.target.value)) {

            setError ('you must enter only numbers'); 

        } else {

            setError ('');

            if (e.target.value > 0) {

                setForm ({ 

                ...form, 
                [e.target.name]: e.target.value

            })};
        }
    };
    
    return (

        <form
        className = 'formAdd' 
        onSubmit = {handlerOnSubmit} >

            <p className = 'pInputs' > NAME: </p>
            <input 
            className = 'inputForm'
            type = "text" 
            name = 'name' 
            value = {form.name}
            onChange = {validateString} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > LIFE: </p>
            <input
            className = 'inputForm'
            type = "number"
            name = 'life' 
            value = {form.life}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > STRENGTH: </p>
            <input
            className = 'inputForm'
            type = "number" 
            name = 'strength' 
            value = {form.strength}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > DEFENSE: </p>
            <input
            className = 'inputForm'
            type = "number" 
            name = 'defense' 
            value = {form.defense}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > SPEED: </p>
            <input
            className = 'inputForm'
            type = "number" 
            name = 'speed' 
            value = {form.speed}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > HEIGHT: </p>
            <input
            className = 'inputForm'
            type = "number" 
            name = 'height' 
            value = {form.height}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > WEIGHT: </p>
            <input
            className = 'inputForm'
            type = "number" 
            name = 'weight' 
            value = {form.weight}
            onChange = {validateNumber} />

            {!error ? null : <p> {error} </p>} 

            <p className = 'pInputs' > IMAGE: </p>
            <input
            className = 'inputForm'
            type = "text" 
            name = 'image' 
            value = {form.image}
            onChange = {validateString} />

            {!error ? null : <p> {error} </p>} 

            <select
            className = 'select' 
            name = "type"
            onChange = {handlerOnChangeSelect} >
                
                {

                  pokemonsTypes.length > 0 && 
                  pokemonsTypes.map ((types) =>  
                    <option 
                    value = {types.name}
                    key = {types.id} >

                        {types.name}

                    </option>
                  )
                }

            </select>

            <button
            className = 'btn'
            type = "submit" >
                Add
            </button>

        </form>
    );
};


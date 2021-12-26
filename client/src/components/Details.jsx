//// componente presentacional 

import React from "react";

export default function Details ({ 
    name,
    id,
    life,
    strength,
    defense,
    speed,
    height,
    weight,
    type, 
    image }) {

	return (
        
		<div className = 'cardDetail' >

                <div className = 'searchImage' >

                    <img
                    className = 'imagePokemon' 
                    src = {image} 
                    alt = {name} />

                </div>
			

            <ul className = 'list' >

            <p className = 'pClass' > Name: {name} </p>
            <p className = 'pClass' > Id: {id} </p>
			<p className = 'pClass' > Life: {life} </p>
			<p className = 'pClass' > Strength: {strength} </p>
			<p className = 'pClass' > Defense: {defense} </p>
			<p className = 'pClass' > Speed: {speed} </p>
			<p className = 'pClass' > Height: {height} </p>
			<p className = 'pClass' > Weight: {weight} </p>
			<p className = 'pClass' > Type: {type} </p>
                
            </ul>

		</div>
	)
};



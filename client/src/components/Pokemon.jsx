import React from "react";

import { Link } from 'react-router-dom';

export default function Pokemon ({ image, name, type, id }) { 

	return (

		<div className = 'card' >
			
			<Link to = {`/home/${id}`}> 

				<p className = 'pClass' > 

					Name: {name} 

				</p>

			</Link>
			
			<p className = 'pClass' > 

				Type: {type} 

			</p>

			<img 
				src={image} 
				alt={name}
				className= 'imagePokemon' />

		</div>
	)
};

 
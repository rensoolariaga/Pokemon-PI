import React from "react";

export default function Paged ({ numberOfPokemons, numberOfPage, amountOfPokemons })  {

  const amountOfPage = [];

  for (let i = 1; i <= Math.ceil (numberOfPokemons / amountOfPokemons); i++) {

    amountOfPage.push (i); 

  };

  return (

    <nav>

      <div className = 'pagination' >

            {

                amountOfPage.map ((page) => (

                    <button
                    className = 'btnPaged'
                    key = {page}
                    onClick = {() => {
                    numberOfPage (page)}} >
                        {` ${page}`} 
                        
                    </button>

                ))

            }

      </div>

    </nav>
  );
};

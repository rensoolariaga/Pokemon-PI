const axios = require ("axios");

const { v4: uuidv4 } = require ("uuid");

const { Pokemon, Type } = require ('../db');

const { ALL_POKEMONS } = require ('../../constants');

 const addPokemon = async (req, res) => {

    let {

        name,
        life,
        strength,
        defense,
        speed,
        height,
        weight,
        types,  // aca le pongo types en plural y le paso un array por postman para respetar como viene en la api
        image

    } = req.body;

      try {

        let createdPokemon = await Pokemon.create ({
        id: uuidv4 (),
        name: name,
        life: life,
        strength: strength,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        image: image

      });

      let typesInDb = await Type.findAll ({ 
        where: { 
          name: types 
        }

      });


      createdPokemon.addType (typesInDb);

      if (createdPokemon) {

        res.json (createdPokemon)

      } 
      else {

        res.json ('Pokemon could not be created')
      }

      }
      catch (error) {

        console.log (error)

      }
       
     };

 const pokemonById = async (req, res) => {

    const { id } = req.params;

    try {

      let allPokemons = (await axios.get (`${ALL_POKEMONS}/${id}/`)).data;
      
      let pokemonFinded = {

        image: allPokemons.sprites.other.dream_world.front_default,
        name: allPokemons.name,
        id: allPokemons.id,
        height: allPokemons.height,
        weight: allPokemons.weight,
        life: allPokemons.stats[0].base_stat,
        strength: allPokemons.stats[1].base_stat,
        defense: allPokemons.stats[2].base_stat,
        speed: allPokemons.stats[5].base_stat,
        type: allPokemons.types.map ((pokemonType) => pokemonType.type.name)

      };
  
      res.send (pokemonFinded);
    } 
    catch (error) {

      Pokemon.findByPk (id, { 
        include: Type }) 
        .then ((pokemon) => {

          res.send (pokemon);

        })
        .catch ((error) => {

          res.status (500).send ("No pokemon with that id");

        });

    }  

};

const allPokemons = async (req, res) => {

  const apiInfo = async () => {

      const apiPokes = (await axios.get (ALL_POKEMONS)); 

      const apiPokes2 = (await axios.get (apiPokes.data.next));

      let apiPokesData = apiPokes.data.results.map ((pokemon) => axios.get (pokemon.url)); 

      let apiPokes2Data = apiPokes2.data.results.map ((pokemon) => axios.get (pokemon.url));

      let completedApiPokemons = apiPokesData.concat (apiPokes2Data);

      let apiPokemons = await Promise.all (completedApiPokemons); 
      
      const allApiPokemons = apiPokemons.map ((pokemon) => { 
        // mapeo todos los pokemons traidos por api 
        return {

          image: pokemon.data.sprites.other.dream_world.front_default,
          name: pokemon.data.name,
          id: pokemon.data.id,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
          life: pokemon.data.stats[0].base_stat,
          strength: pokemon.data.stats[1].base_stat,
          defense: pokemon.data.stats[2].base_stat,
          speed: pokemon.data.stats[5].base_stat,
          // aca tengo que mapear porque types es un array y me traigo los nombres de type
          type: pokemon.data.types.map((pokemonType) => pokemonType.type.name)

        };

      });

      return allApiPokemons;

  };

  const dbInfo = async () => {

    let dbPokes = await Pokemon.findAll ({
      include: Type
     }); 

       dbPokes = dbPokes.map ((pokemon) => { 

          return {

            name: pokemon.dataValues.name,
            life: pokemon.dataValues.life,
            strength: pokemon.dataValues.strength,
            defense: pokemon.dataValues.defense,
            speed: pokemon.dataValues.speed,
            height: pokemon.dataValues.height,
            weight: pokemon.dataValues.weight,
            image: pokemon.dataValues.image,
            id: pokemon.dataValues.id,
            type: pokemon.dataValues.types.map ((pokemonType) => pokemonType.name)

      };

   });

   return dbPokes;

  };

  const showAllPokemons = async () => {

    const api = await apiInfo ();
    const db = await dbInfo ();
    const totalPokemons = api.concat (db);
    return totalPokemons;

  }
  
  const  { name }  = req.query;

  try{

    let pokemonsAll = await showAllPokemons ();
    
    if (name) {

      let matchPokemon = await pokemonsAll.filter ((pokemon) => pokemon.name.toLowerCase().includes (name.toLowerCase ())); 

      if (matchPokemon.length > 0) {

        res.send (matchPokemon);

      }
      else { 
        res.send ([])   // estudioooonnn
      }

    } 
    else { 
      
      res.send (pokemonsAll)
      
    }
    
}
catch (error) {

  console.log (error)

}

};

module.exports = {

    allPokemons,
    pokemonById,
    addPokemon

}

// FIX 
// FINISHED pokemonByID, addPokemon, allPokemons y pokemonById
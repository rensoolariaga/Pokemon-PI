// importo los modelos de la db

const { Type } = require ('../db');

// importo axios para hacer el llamado 

const axios = require ("axios");

// importo las constantes para no equivocarme 

const { POKEMONS_TYPE } = require ('../../constants');

// creo una funcion de precarga para exportarla al index y hacerla cada vez que se cargeu el servidor
const preLoadPokemonsType = async () => {

    try{

        let typesApi = (await axios.get (POKEMONS_TYPE)).data.results; //hago la llamada a types

        typesApi = typesApi.map ((type) => { // redefino y mapeo para que cada type que encuentre me lo guarde en la propiedad name
            return {

                name: type.name

            }
        });

        // redefino esperando que se resuelva y mapeo por cada type encontrado para que me lo devuelva o que lo cree en la db (por eso el finOrCreate)
        typesApi = await Promise.all (
            typesApi.map (e => Type.findOrCreate ({

                where: e

            }))
        );
        return 'types chargueds sucesfully'
    }
    catch (error) {

    console.log (error);

  };
    
};

const pokemonsType = async (req, res) => {

     try {

        const alltypes = await Type.findAll (); // me traigo todos los types de la db
        res.json (alltypes);
    }
    catch (error) {

        console.log (error);

    }
};

// exporto los controladores para usarlos en la ruta 

module.exports = {

    preLoadPokemonsType,
    pokemonsType
};

// FIX 
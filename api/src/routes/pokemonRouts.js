const { Router } = require('express');
const router = Router();

const {

    allPokemons,  
    pokemonById,
    addPokemon
    
} = require('../controllers/pokemonController');

router.get('/', allPokemons); 
router.get('/pokemonById', pokemonById);
router.post('/addpokemon', addPokemon);



module.exports =router;

const { Router } = require('express');
const router = Router();

const pokemonRouts = require('./pokemonRouts')
const typeRouts = require('./typeRouts')


router.use('/pokemon', pokemonRouts);
router.use('/type', typeRouts);

module.exports = router;
